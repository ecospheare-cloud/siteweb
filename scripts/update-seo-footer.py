from pathlib import Path
import json,re,subprocess
root=Path(__file__).resolve().parents[1]
count=0
for name in subprocess.check_output(['git','ls-files','*.html'],cwd=root,text=True).splitlines():
 p=root/name;s=p.read_text()
 if 'class="site-footer"' not in s:continue
 s=re.sub(r'<section class="footer-seo wrap".*?</section>','',s,flags=re.S)
 if '/plan-du-site/' not in s:
  s=s.replace('<nav class="footer-legal-links" aria-label="Informations légales">','<nav class="footer-legal-links" aria-label="Informations légales"><a href="/plan-du-site/">Plan du site</a>')
 p.write_text(s);count+=1
print('Updated',count,'footers')
