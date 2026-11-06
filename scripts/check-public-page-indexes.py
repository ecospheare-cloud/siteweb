#!/usr/bin/env python3
"""Check route discoverability and keep noindex pages out of the XML sitemap."""
from pathlib import Path
import json
import re

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
    relative='index.html' if route=='/' else route.strip('/')+'/index.html' if route.endswith('/') else route.strip('/')
    page=ROOT/relative
    if not page.exists():
        missing.append(f'{route}: fichier HTML absent')
        continue
    html=page.read_text()
    robots=re.search(r'<meta name="robots" content="([^"]*)"', html)
    noindex=robots and 'noindex' in robots[1].split(',')
    if noindex and absolute in sitemap:
        missing.append(f'{route}: page noindex présente dans sitemap.xml')
    elif not noindex and absolute not in sitemap:
        missing.append(f'{route}: sitemap.xml')
    if route!='/plan-du-site/' and 'href="/plan-du-site/"' not in html:
        missing.append(f'{route}: lien vers le plan du site')
if missing:
    raise SystemExit('Pages publiques non indexées:\n- '+'\n- '.join(missing))
print(f'{len(routes)} routes vérifiées : plan HTML et sitemap XML cohérents avec les consignes d’indexation.')
