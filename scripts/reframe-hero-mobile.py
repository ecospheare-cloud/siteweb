#!/usr/bin/env python3
"""Recadrage mobile du film 202611031817 (4), en retirant le plan portrait."""
import argparse
import json
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--source', type=Path, required=True, help='Source originale de 17,43 s, avant ajout du second film')
parser.add_argument('--output', type=Path, required=True, help='Fichier du premier segment vertical à assembler ensuite')
args = parser.parse_args()
info = json.loads(subprocess.check_output([
    'ffprobe', '-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height,nb_frames,r_frame_rate', '-of', 'json', str(args.source),
]))['streams'][0]
if (info['width'], info['height'], info['nb_frames'], info['r_frame_rate']) != (1920, 1080, '523', '30/1'):
    raise SystemExit('Montage différent : ajuster les coupes et les points de suivi avant le rendu.')

# Début/fin exclusifs en images ; abscisse du sujet (0 = gauche, 1 = droite).
# Les raccords suivent les coupes originales, sans panoramique entre deux plans.
SHOTS = [
    (0, 47, .46, .46),      # Eye-D : veste et chaussures
    (47, 100, .33, .33),    # Eye-D : texte principal de l'écran du portable, à gauche
    (100, 136, .30, .28),   # Camion : suivre le marquage sur le flanc
    (136, 168, .40, .44),   # Équipe à côté du camion
    (168, 212, .52, .52),   # Équipe face à la maison
    (212, 284, .47, .49),   # Site de rénovation sur le PC
    (284, 361, .52, .54),   # Salle du Clos
    (361, 430, .51, .51),   # Site du Clos sur le PC
    (430, 468, .47, .47),   # Portrait supprimé après le recadrage
    (468, 523, .50, .50),   # Animation du logo sur le PC
]
crop_width = 608
expression = '0'
for start, end, initial, final in reversed(SHOTS):
    center = f'({initial}+({final-initial})*(n-{start})/{end-start-1})*1920'
    offset = f'max(0,min(iw-ow,{center}-{crop_width/2}))'
    expression = f'if(lt(n,{end}),{offset},{expression})'

output = args.output
subprocess.run([
    'ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', str(args.source),
    # Retirer les images 430 à 467 après le suivi, qui utilise les indices source.
    '-vf', f"crop={crop_width}:1080:x='{expression}':y=0,select='not(between(n,430,467))',setpts=N/(30*TB),scale=720:1280,setsar=1",
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '25', '-maxrate', '1400k',
    '-bufsize', '2800k', '-pix_fmt', 'yuv420p', '-g', '60', '-an',
    '-movflags', '+faststart', str(output),
], check=True)
subprocess.run([
    'ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-ss', '0.55', '-i', str(output),
    '-vf', 'scale=450:800', '-frames:v', '1', '-q:v', '4',
    str(output.with_suffix('.jpg')),
], check=True)
print(f'Vidéo verticale : {output.stat().st_size / 1_000_000:.2f} Mo')
