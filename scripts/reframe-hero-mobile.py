#!/usr/bin/env python3
"""Recadrage mobile du montage de 605 images, sans modifier ses coupes ni sa durée."""
import argparse
import json
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--source', type=Path, default=ROOT / 'assets/hero-ecospheare.mp4')
args = parser.parse_args()
info = json.loads(subprocess.check_output([
    'ffprobe', '-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height,nb_frames,r_frame_rate', '-of', 'json', str(args.source),
]))['streams'][0]
if (info['width'], info['height'], info['nb_frames'], info['r_frame_rate']) != (1920, 1080, '605', '30/1'):
    raise SystemExit('Montage différent : ajuster les coupes et les points de suivi avant le rendu.')

# Début/fin exclusifs en images ; abscisse du sujet (0 = gauche, 1 = droite).
# Les raccords suivent les coupes originales, sans panoramique entre deux plans.
SHOTS = [
    (0, 39, .46, .46),       # Eye-D : veste et chaussures
    (39, 92, .33, .33),      # Eye-D : texte principal de l'écran du portable, à gauche
    (92, 128, .30, .28),     # Camion : suivre le marquage sur le flanc
    (128, 160, .40, .44),    # Équipe à côté du camion
    (160, 205, .52, .52),    # Équipe face à la maison
    (205, 276, .48, .49),    # Site de rénovation sur le PC
    (276, 354, .52, .54),    # Salle du Clos
    (354, 423, .51, .51),    # Site du Clos sur le PC
    (423, 468, .49, .49),    # Dubaï : Burj Khalifa
    (468, 505, .48, .48),    # Portrait
    (505, 560, .50, .50),    # Animation du logo sur le PC
    (560, 605, .65, .60),    # Grand-Place de Lille : suivre le beffroi
]
crop_width = 608
expression = '0'
for start, end, initial, final in reversed(SHOTS):
    center = f'({initial}+({final-initial})*(n-{start})/{end-start-1})*1920'
    offset = f'max(0,min(iw-ow,{center}-{crop_width/2}))'
    expression = f'if(lt(n,{end}),{offset},{expression})'

output = ROOT / 'assets/hero-ecospheare-portrait.mp4'
subprocess.run([
    'ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', str(args.source),
    '-vf', f"crop={crop_width}:1080:x='{expression}':y=0,scale=720:1280,setsar=1",
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '25', '-maxrate', '1400k',
    '-bufsize', '2800k', '-pix_fmt', 'yuv420p', '-g', '60', '-an',
    '-movflags', '+faststart', str(output),
], check=True)
subprocess.run([
    'ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-ss', '0.55', '-i', str(output),
    '-vf', 'scale=450:800', '-frames:v', '1', '-q:v', '4',
    str(ROOT / 'assets/hero-ecospheare-portrait.jpg'),
], check=True)
print(f'Vidéo verticale : {output.stat().st_size / 1_000_000:.2f} Mo')
