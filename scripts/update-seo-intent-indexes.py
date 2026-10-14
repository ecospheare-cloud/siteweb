#!/usr/bin/env python3
from pathlib import Path
import json, re

ROOT=Path(__file__).resolve().parents[1]
PAGES=[
('agence-chatgpt','Agence ChatGPT'),('agence-claude-code','Agence Claude Code'),('agence-chatbot-ia','Agence chatbot IA'),
('automatisation-crm','Automatisation CRM'),('automatisation-n8n','Automatisation n8n'),('agence-integration-api','Agence intégration API'),('automatisation-facturation','Automatisation facturation'),
('logiciel-metier-sur-mesure','Logiciel métier sur mesure'),('refonte-maintenance-logiciel','Refonte et maintenance logiciel'),
('agence-developpement-application','Agence développement application'),('application-metier-sur-mesure','Application métier sur mesure'),('developpement-portail-client','Développement portail client'),
('agence-creation-mvp','Agence création MVP'),('erp-sur-mesure','ERP sur mesure'),('tableau-de-bord-sur-mesure','Tableau de bord sur mesure'),
('creation-site-vitrine-professionnel','Création site vitrine professionnel'),('creation-site-web-avec-ia','Création site web avec IA')]

routes=json.loads((ROOT/'routes.json').read_text())
for slug,_ in PAGES:
    url=f'/{slug}/'
    if url not in routes: routes.append(url)
(ROOT/'routes.json').write_text(json.dumps(routes,ensure_ascii=False,indent=2)+'\n')
(ROOT/'dist/routes.json').write_text((ROOT/'routes.json').read_text())

for rel in ['sitemap.xml','dist/sitemap.xml']:
    p=ROOT/rel; text=p.read_text()
    urls=set(re.findall(r'<loc>(.*?)</loc>',text))
    urls.update(f'https://ecospheare.com/{slug}/' for slug,_ in PAGES)
    p.write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'<url><loc>{u}</loc></url>\n' for u in sorted(urls))+'</urlset>\n')

links=''.join(f'<li><a href="/{slug}/">{label}</a></li>' for slug,label in PAGES)
for rel in ['plan-du-site/index.html','dist/plan-du-site/index.html']:
    p=ROOT/rel; text=p.read_text()
    if 'Pages spécialisées IA, automatisation et développement' not in text:
        marker='</ul></div><div><h2>Projets</h2>'
        block=f'</ul></div><div><h2>Pages spécialisées IA, automatisation et développement</h2><ul>{links}</ul></div><div><h2>Projets</h2>'
        text=text.replace(marker,block,1)
    p.write_text(text)

directory='<section class="service-directory service-directory--all" aria-labelledby="all-services-title"><p class="eyebrow">Expertises spécialisées</p><h2 id="all-services-title">Trouvez la page qui correspond à votre projet.</h2><div>'+''.join(f'<a href="/{slug}/"><span>{label}</span><span>↗</span></a>' for slug,label in PAGES)+'</div></section>'
for rel in ['expertises/index.html','dist/expertises/index.html']:
    p=ROOT/rel; text=p.read_text()
    if 'all-services-title' not in text:
        text=text.replace('<section class="blog-teaser"',directory+'<section class="blog-teaser"',1)
    p.write_text(text)

llms='\n'.join(f'- [{label}](https://ecospheare.com/{slug}/): page spécialisée sur cette intention de service.' for slug,label in PAGES)
for rel in ['llms.txt','dist/llms.txt']:
    p=ROOT/rel; text=p.read_text()
    if 'https://ecospheare.com/agence-chatgpt/' not in text:
        text=text.replace('## Projets',llms+'\n\n## Projets',1)
    p.write_text(text)
