#!/usr/bin/env python3
"""Keep the compact mobile navigation consistent across every static page."""
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
LINKS = (
    '<a href="/agence/">L’agence</a>'
    '<a href="/projets/">Nos projets</a>'
    '<a href="/blog.html">Blog</a>'
    '<a href="/expertises/">Expertises</a>'
)
PATTERN = re.compile(r'(<nav id="mobile-menu"[^>]*>).*?(</nav>)', re.S)

for name in subprocess.check_output(
    ['git', 'ls-files', '*.html'], cwd=ROOT, text=True
).splitlines():
    path = ROOT / name
    source = path.read_text()
    updated = PATTERN.sub(lambda match: match[1] + LINKS + match[2], source)
    if updated != source:
        path.write_text(updated)

