from pathlib import Path
import json,re,subprocess
root=Path(__file__).resolve().parents[1]
cities=json.loads((root/'local-seo-data.json').read_text())
block='<section class="footer-seo wrap" aria-label="Agence SEO par ville"><div class="footer-seo-heading"><h2>Agence SEO</h2><a href="/consultant-seo/">Toutes nos villes ↗</a></div><nav aria-label="Accompagnement SEO local">'+''.join(f'<a href="/consultant-seo-{slug}/">SEO à {city}</a>' for slug,city,*_ in cities)+'</nav></section>'
count=0
for name in subprocess.check_output(['git','ls-files','*.html'],cwd=root,text=True).splitlines():
 p=root/name;s=p.read_text()
 if 'class="site-footer"' not in s:continue
 s=re.sub(r'<section class="footer-seo wrap".*?</section>','',s,flags=re.S)
 s=s.replace('<footer class="site-footer">','<footer class="site-footer">'+block)
 p.write_text(s);count+=1
print('Updated',count,'footers')
