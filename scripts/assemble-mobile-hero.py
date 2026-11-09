#!/usr/bin/env python3
"""Assemble the mobile hero update received on 2026-11-09.

README / provenance
-------------------
The user supplied ``202611091327 (1).mp4`` (1080 x 1920, nominal 60 fps)
to replace only the second film in the mobile hero. The first 485 frames
of each existing mobile asset are retained, including the original project
shots; the last six of those frames participate in the 0.2-second dissolve.
The new film dissolves for 0.3 seconds into a separately rendered outro
showing ecospheare.com and a cursor click.

The supplied outros must already exist: portrait 720 x 1280 at 30 fps and
landscape 960 x 540 at 30 fps. On landscape phones the whole vertical source
is fitted onto a #0b1c36 canvas, so its text is never cropped.

Example (run from any directory):
    python3 scripts/assemble-mobile-hero.py \
      --source '/Users/sach_zw/Downloads/202611091327 (1).mp4' \
      --portrait-outro /private/tmp/outro-portrait.mp4 \
      --landscape-outro /private/tmp/outro-landscape.mp4 \
      --base-dir /private/tmp/ecospheare-mobile-20261109/originals \
      --output-dir /private/tmp/ecospheare-mobile-20261109

Use --check-only to validate inputs and print the exact frame counts,
crossfade offsets and expected output duration without rendering.
Use --base-dir to read preserved original mobile assets when rerendering
after an earlier assembly has already been installed into assets/. It
defaults to the repository's assets/ directory. The script never
overwrites input assets, existing outputs, desktop video,
posters, HTML, or dist. Review the two outputs before copying them into
assets/ and dist/assets/ and updating the versioned URLs in index.html.

Requires ffmpeg (with libx264 and xfade) and ffprobe on PATH. All outputs
are muted H.264/yuv420p, CFR 30 fps, CRF 22, slow preset, faststart.
"""

import argparse
from fractions import Fraction
import json
import math
from pathlib import Path
import shutil
import subprocess
import sys


ROOT = Path(__file__).resolve().parents[1]
FPS = 30
BASE_FRAMES = 485
FIRST_FADE_FRAMES = 6
OUTRO_FADE_FRAMES = 9
RENDITIONS = (
    ('portrait', 'hero-ecospheare-portrait.mp4', 720, 1280, '3000k', '6000k'),
    ('landscape', 'hero-ecospheare-mobile.mp4', 960, 540, '2000k', '4000k'),
)


def fail(message):
    raise ValueError(message)


def probe(path, *, count_frames=False):
    if not path.is_file():
        fail(f'Input missing: {path}')
    command = ['ffprobe', '-v', 'error']
    if count_frames:
        command += ['-count_frames']
    command += ['-show_streams', '-show_format', '-of', 'json', str(path)]
    info = json.loads(subprocess.check_output(command, text=True))
    videos = [s for s in info['streams'] if s['codec_type'] == 'video']
    if len(videos) != 1:
        fail(f'Expected exactly one video stream: {path}')
    video = videos[0]
    duration = float(video.get('duration') or info['format']['duration'])
    if not math.isfinite(duration) or duration <= 0:
        fail(f'Invalid video duration: {path}')
    rate = Fraction(video['r_frame_rate'])
    rotation = video.get('tags', {}).get('rotate', '0')
    for side_data in video.get('side_data_list', []):
        rotation = side_data.get('rotation', rotation)
    if float(rotation) % 360:
        fail(f'Unexpected rotation metadata; normalize orientation first: {path}')
    return {
        'path': path,
        'video': video,
        'streams': info['streams'],
        'duration': duration,
        'fps': float(rate),
        'width': int(video['width']),
        'height': int(video['height']),
    }


def expect(info, width, height, fps):
    if (info['width'], info['height']) != (width, height):
        fail(f'Expected {width}x{height}, got {info["width"]}x{info["height"]}: {info["path"]}')
    if abs(info['fps'] - fps) > 0.01:
        fail(f'Expected nominal {fps} fps, got {info["fps"]}: {info["path"]}')


def cfr_frames(info):
    # The source is slightly variable-rate and starts at PTS 0.033333.
    # Use the video stream duration, not the longer AAC/container duration.
    return max(1, math.floor(info['duration'] * FPS + 0.5))


def seconds(frames):
    return f'{frames / FPS:.9f}'


def filter_graph(width, height, source_frames, outro_frames):
    expected_frames = BASE_FRAMES + source_frames + outro_frames - FIRST_FADE_FRAMES - OUTRO_FADE_FRAMES
    fit = ('scale=720:1280' if width == 720 else
           'scale=-2:540,pad=960:540:(ow-iw)/2:(oh-ih)/2:color=0x0b1c36')
    # Explicit counts make rounding predictable for the variable-rate source.
    # A cloned end frame covers a possible sub-frame gap after fps conversion.
    normalize = 'fps=30,setsar=1,format=yuv420p,settb=AVTB'
    graph = (
        f'[0:v]trim=end_frame={BASE_FRAMES},setpts=PTS-STARTPTS,{normalize}[base];'
        f'[1:v]setpts=PTS-STARTPTS,{fit},{normalize},'
        f'tpad=stop_mode=clone:stop_duration=1,trim=end_frame={source_frames},'
        'setpts=N/(30*TB)[new];'
        f'[2:v]setpts=PTS-STARTPTS,{normalize},'
        f'tpad=stop_mode=clone:stop_duration=1,trim=end_frame={outro_frames},'
        'setpts=N/(30*TB)[outro];'
        '[base][new]xfade=transition=fade:duration=0.2:'
        f'offset={seconds(BASE_FRAMES - FIRST_FADE_FRAMES)}[joined];'
        '[joined][outro]xfade=transition=fade:duration=0.3:'
        f'offset={seconds(BASE_FRAMES + source_frames - FIRST_FADE_FRAMES - OUTRO_FADE_FRAMES)},'
        f'trim=end_frame={expected_frames},setpts=N/(30*TB),format=yuv420p[v]'
    )
    return graph, expected_frames


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('--source', type=Path, required=True)
    parser.add_argument('--portrait-outro', type=Path, required=True)
    parser.add_argument('--landscape-outro', type=Path, required=True)
    parser.add_argument('--base-dir', type=Path, default=ROOT / 'assets',
                        help='Directory containing the original mobile hero assets (default: repository assets/)')
    parser.add_argument('--output-dir', type=Path, required=True)
    parser.add_argument('--check-only', action='store_true', help='Validate and print the assembly plan without rendering')
    args = parser.parse_args()
    for executable in ('ffmpeg', 'ffprobe'):
        if not shutil.which(executable):
            fail(f'{executable} is required on PATH')

    source_path = args.source.expanduser().resolve()
    base_dir = args.base_dir.expanduser().resolve()
    output_dir = args.output_dir.expanduser().resolve()
    source = probe(source_path)
    expect(source, 1080, 1920, 60)
    source_frames = cfr_frames(source)
    if source_frames <= FIRST_FADE_FRAMES + OUTRO_FADE_FRAMES:
        fail('The new source is too short for both dissolves')

    plans = []
    input_paths = {source_path}
    for kind, name, width, height, maxrate, bufsize in RENDITIONS:
        base_path = (base_dir / name).resolve()
        outro_path = getattr(args, kind + '_outro').expanduser().resolve()
        base = probe(base_path)
        outro = probe(outro_path)
        expect(base, width, height, FPS)
        expect(outro, width, height, FPS)
        if base['duration'] + 1e-6 < BASE_FRAMES / FPS:
            fail(f'Base must contain at least {BASE_FRAMES} frames: {base_path}')
        if base['video'].get('nb_frames', 'N/A') != 'N/A' and int(base['video']['nb_frames']) < BASE_FRAMES:
            fail(f'Base has fewer than {BASE_FRAMES} frames: {base_path}')
        outro_frames = cfr_frames(outro)
        if outro_frames <= OUTRO_FADE_FRAMES:
            fail(f'Outro must last longer than the 0.3-second dissolve: {outro_path}')
        graph, expected_frames = filter_graph(width, height, source_frames, outro_frames)
        output = output_dir / name
        temporary = output_dir / ('.' + name.removesuffix('.mp4') + '.partial.mp4')
        input_paths.update((base_path, outro_path))
        plans.append({
            'kind': kind, 'name': name, 'width': width, 'height': height,
            'base': base_path, 'outro': outro_path, 'output': output,
            'temporary': temporary, 'maxrate': maxrate, 'bufsize': bufsize,
            'graph': graph, 'outro_frames': outro_frames,
            'expected_frames': expected_frames,
        })

    for plan in plans:
        for path in (plan['output'], plan['temporary']):
            if path.resolve() in input_paths:
                fail(f'Refusing to overwrite an input: {path}')
            if path.exists() or path.is_symlink():
                fail(f'Refusing to overwrite an existing output: {path}')

    manifest = {
        'source_received': '2026-11-09', 'source': str(source_path),
        'base_dir': str(base_dir),
        'source_video_duration': source['duration'], 'normalized_source_frames': source_frames,
        'retained_base_frames': BASE_FRAMES, 'fps': FPS,
        'first_dissolve_seconds': 0.2, 'outro_dissolve_seconds': 0.3,
        'outputs': [{
            'path': str(p['output']), 'width': p['width'], 'height': p['height'],
            'frames': p['expected_frames'], 'duration': p['expected_frames'] / FPS,
            'filter_graph': p['graph'],
        } for p in plans],
    }
    print(json.dumps(manifest, ensure_ascii=False, indent=2), flush=True)
    if args.check_only:
        return

    output_dir.mkdir(parents=True, exist_ok=True)
    try:
        for plan in plans:
            command = [
                'ffmpeg', '-hide_banner', '-loglevel', 'warning', '-nostdin', '-n',
                '-i', str(plan['base']), '-i', str(source_path), '-i', str(plan['outro']),
                '-filter_complex', plan['graph'], '-map', '[v]', '-an',
                '-c:v', 'libx264', '-preset', 'slow', '-crf', '22',
                '-maxrate', plan['maxrate'], '-bufsize', plan['bufsize'],
                '-pix_fmt', 'yuv420p', '-r', str(FPS), '-fps_mode', 'cfr',
                '-g', '60', '-movflags', '+faststart', str(plan['temporary']),
            ]
            subprocess.run(command, check=True)
            rendered = probe(plan['temporary'], count_frames=True)
            expect(rendered, plan['width'], plan['height'], FPS)
            if any(s['codec_type'] == 'audio' for s in rendered['streams']):
                fail(f'Unexpected audio in {plan["temporary"]}')
            if rendered['video'].get('codec_name') != 'h264' or rendered['video'].get('pix_fmt') != 'yuv420p':
                fail(f'Unexpected codec or pixel format in {plan["temporary"]}')
            actual_frames = int(rendered['video']['nb_read_frames'])
            if actual_frames != plan['expected_frames']:
                fail(f'Frame count mismatch: expected {plan["expected_frames"]}, got {actual_frames}')
            if abs(rendered['duration'] - plan['expected_frames'] / FPS) > 1 / FPS:
                fail(f'Unexpected output duration: {plan["temporary"]}')
        # Publish the output files only after both renditions pass validation.
        for plan in plans:
            if plan['output'].exists() or plan['output'].is_symlink():
                fail(f'Output appeared during rendering; refusing overwrite: {plan["output"]}')
            plan['temporary'].rename(plan['output'])
            print(f'Validated {plan["output"]}: {plan["expected_frames"]} frames, no audio', flush=True)
    finally:
        for plan in plans:
            if plan['temporary'].is_file():
                plan['temporary'].unlink()


if __name__ == '__main__':
    try:
        main()
    except (ValueError, subprocess.CalledProcessError, OSError, KeyError) as exc:
        print(f'Assembly failed: {exc}', file=sys.stderr)
        sys.exit(1)
