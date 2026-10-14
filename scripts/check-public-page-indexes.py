#!/usr/bin/env python3
"""Fail when a declared public route is missing from the site plan or sitemap."""
from pathlib import Path
import json

ROOT=Path(__file__).resolve().parents[1]
routes=json.loads((ROOT/'routes.json').read_text())
plan=(ROOT/'plan-du-site/index.html').read_text()
sitemap=(ROOT/'sitemap.xml').read_text()
# These legacy case studies remain routable but were explicitly excluded from the
# public portfolio and search indexes until their project copy is validated.
excluded={'/projets/house-of-lucia/','/projets/neptula/','/projets/thomas-fit/'}
missing=[]
for route in routes:
    if route == '/' or route in excluded:
        continue
    if route not in plan:
        missing.append(f'{route}: plan-du-site')
    absolute='https://ecospheare.com'+route
    if absolute not in sitemap:
        missing.append(f'{route}: sitemap.xml')
if missing:
    raise SystemExit('Pages publiques non indexées:\n- '+'\n- '.join(missing))
print(f'{len(routes)} routes publiques présentes dans le plan du site et le sitemap.')
