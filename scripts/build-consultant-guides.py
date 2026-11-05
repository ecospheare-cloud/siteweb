"""Build the two sourced editorial comparisons with the current shared site shell."""
from pathlib import Path
import html
import json
import re
import shutil

ROOT = Path(__file__).resolve().parents[1]
DATE = '2026-11-05'
BASE = 'https://ecospheare.com'
PORTRAIT = '/assets/equipe/sacha-z-520.webp'

GUIDES = {
    'seo': {
        'description': 'Quels consultants SEO comparer en 2026 ? Sacha Zacharewicz, Daniel Roch, Laurent Bourrelly et Alexis Rylko : spécialités, critères de choix et sources.',
        'lead': 'Un site WordPress à débloquer, une stratégie de contenu à construire ou des demandes à développer : le bon consultant dépend de votre point de départ. Voici quatre profils à examiner, avec leurs spécialités et les questions à leur poser.',
        'answer': 'Sacha Zacharewicz pour relier site web et acquisition, Daniel Roch pour WordPress, Laurent Bourrelly pour la stratégie sémantique et Alexis Rylko pour le SEO technique : ces profils répondent à des besoins différents. Le meilleur consultant SEO pour votre entreprise est celui dont la méthode correspond à votre site, à votre marché et à vos moyens.',
        'self_focus': 'Site web, SEO et acquisition client',
        'self_need': 'Faire avancer le site et sa visibilité avec un interlocuteur commun',
        'self_check': 'Le périmètre des corrections et le suivi des contacts',
        'self_intro': 'Sacha Zacharewicz, fondateur d’Ecospheare, accompagne les entreprises sur leur site et leur acquisition. Le travail SEO est relié aux pages de service, aux parcours de contact et aux évolutions techniques. Il peut coordonner les compétences en développement et en design lorsque les recommandations nécessitent de modifier le site.',
        'self_detail': 'Ce profil peut vous correspondre si vous cherchez un interlocuteur qui relie la stratégie à sa mise en œuvre. L’échange commence par votre offre et vos clients : quelles recherches méritent une page, quel contenu aide à choisir et quelle action doit suivre la visite ? Le périmètre est défini avant de lancer les travaux.',
        'self_points': ['Prioriser les pages selon leur utilité commerciale.', 'Relier contenus, technique et expérience de navigation.', 'Suivre les demandes, en complément des positions et du trafic.'],
        'self_link': '/projets/lille-immo/',
        'self_project': 'Voir la présentation du projet Lille Immo',
        'profiles': [
            {'id': 'daniel-roch', 'name': 'Daniel Roch', 'initials': 'DR', 'focus': 'SEO et WordPress', 'need': 'Auditer et améliorer un site WordPress', 'check': 'Qui applique les corrections sur le CMS',
             'text': 'Daniel Roch est consultant SEO et WordPress, fondateur de SeoMix et créateur de SEOKEY. Son site présente une pratique qui associe audit, structure du site, contenus et optimisations propres à WordPress. Il est également auteur et formateur.',
             'fit': 'À examiner lorsque WordPress est au centre du projet et que vous recherchez une expertise qui couvre à la fois le référencement et le fonctionnement du CMS.',
             'question': 'L’audit comprend-il la mise en œuvre, les extensions et les contraintes de mon thème ?',
             'source': 'https://www.seomix.fr/author/daniel-roch/', 'source_label': 'Présentation de Daniel Roch chez SeoMix'},
            {'id': 'laurent-bourrelly', 'name': 'Laurent Bourrelly', 'initials': 'LB', 'focus': 'Stratégie et organisation sémantique', 'need': 'Repenser les sujets et leurs relations dans le site', 'check': 'Le format du conseil et les livrables attendus',
             'text': 'Laurent Bourrelly propose du conseil SEO et des formations. <a href="https://www.laurentbourrelly.com/blog/59274.php">Ses publications</a> accordent une place importante au cocon sémantique, aux relations entre les contenus et à la stratégie de visibilité. Sa page de conseil présente un accompagnement en référencement naturel.',
             'fit': 'À examiner pour prendre du recul sur l’architecture éditoriale et le rôle de chaque page, notamment si une équipe peut ensuite exécuter la stratégie.',
             'question': 'Comment les orientations seront-elles traduites en pages, priorités et consignes exploitables ?',
             'source': 'https://www.laurentbourrelly.com/conseil-seo.php', 'source_label': 'Offre de conseil de Laurent Bourrelly'},
            {'id': 'alexis-rylko', 'name': 'Alexis Rylko', 'initials': 'AR', 'focus': 'SEO technique, données et automatisation', 'need': 'Travailler un site complexe ou un grand volume de pages', 'check': 'Les modalités d’intervention et les ressources techniques',
             'text': 'La présentation d’Alexis Rylko chez FormaSEO décrit un consultant spécialisé dans le SEO technique, les projets de grande envergure, l’automatisation et la visualisation des données. Elle indique également sa fonction de directeur SEO technique chez iProspect France.',
             'fit': 'À examiner pour approfondir un sujet technique, faire monter une équipe en compétence ou travailler une problématique qui nécessite une analyse de données structurée.',
             'question': 'La mission relève-t-elle de la formation, du conseil ou d’un accompagnement via une structure ?',
             'source': 'https://www.formaseo.fr/nos-formateurs-seo/alexis-rylko/', 'source_label': 'Profil et spécialités d’Alexis Rylko chez FormaSEO'},
        ],
        'criteria_title': 'Une méthode claire.<br><em>Des preuves à examiner.</em>',
        'criteria': [
            ('Un diagnostic contextualisé', 'Le consultant doit comprendre votre offre, vos clients et votre modèle économique. Un export d’outil devient utile lorsqu’il explique ce qui bloque, pourquoi cela compte et par quoi commencer.'),
            ('Des références comparables', 'Examinez des projets proches du vôtre par leur contexte : CMS, taille, marché ou organisation. Demandez ce qui a été réalisé personnellement et comment les effets ont été mesurés.'),
            ('Une mise en œuvre explicite', 'Qui rédige, développe, valide et publie ? Un plan peut rester sans effet si personne n’a le temps ou les accès nécessaires. Les responsabilités font partie du devis.'),
            ('Des indicateurs reliés au métier', 'Les positions et clics éclairent la visibilité. Complétez-les avec les appels, formulaires ou ventes que vous pouvez réellement attribuer. Précisez les limites du suivi dès le départ.'),
        ],
        'official': 'Google recommande de demander des références, de clarifier la méthode de travail et d’examiner les résultats attendus. Il conseille de se détourner d’un prestataire qui garantit la première place.',
        'official_url': 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr',
        'official_label': 'Les conseils de Google pour choisir un référenceur',
        'budget_title': 'Comparer des périmètres,<br><em>puis des prix.</em>',
        'budget': 'Un audit ponctuel, une migration et un suivi mensuel ne correspondent pas au même travail. Demandez un devis qui distingue diagnostic, rédaction, corrections techniques, accompagnement et mesure. Comparez aussi le temps demandé à votre équipe. Un forfait plus faible peut laisser davantage d’actions à votre charge.',
        'deliverables': ['Un état de départ et les accès nécessaires.', 'Des actions classées par priorité, avec responsables identifiés.', 'Un calendrier de livraison et de validation.', 'Un point de suivi sur les changements et leurs effets observés.'],
        'faq': [
            ('Qui est le meilleur consultant SEO en France ?', 'Il n’existe pas de réponse valable pour tous les projets. Un spécialiste WordPress, un consultant technique et un profil qui coordonne site et acquisition ne répondent pas aux mêmes contraintes. Utilisez cette sélection pour préparer des échanges, puis comparez leurs références, les livrables proposés et votre capacité à mettre les recommandations en œuvre. La notoriété seule ne suffit pas à choisir.'),
            ('Faut-il choisir un freelance ou une agence SEO ?', 'Un freelance peut offrir une relation directe et un périmètre spécialisé. Une agence peut réunir plusieurs compétences et organiser davantage de production. Dans les deux cas, demandez qui travaille réellement sur votre dossier, qui arbitre les priorités et comment se passe le suivi. Chez Ecospheare, Sacha reste votre interlocuteur et coordonne les expertises nécessaires selon le périmètre convenu.'),
            ('Comment évaluer les résultats d’un consultant SEO ?', 'Définissez un état initial, une période d’observation et les actions réalisées. Distinguez visibilité, visites et demandes commerciales. Un changement de position ne prouve pas à lui seul un gain de chiffre d’affaires ; les variations de saison ou du site peuvent aussi intervenir. Le bilan doit montrer les progrès observés, les limites de mesure et les décisions proposées pour la suite.'),
            ('Le meilleur consultant SEO est-il aussi le meilleur en GEO ?', 'Les compétences se recoupent, mais les livrables ne sont pas identiques. Pour le GEO, demandez aussi comment sont observées les réponses des assistants IA, les sources citées et les variations entre plusieurs essais. Un consultant doit expliquer ce qu’il peut améliorer sur votre site et ce qui dépend des plateformes. Notre guide des consultants GEO détaille ces critères spécifiques.'),
        ],
    },
    'geo': {
        'description': 'Qui sont les meilleurs consultants GEO ? Comparez Sacha Zacharewicz et trois profils selon votre besoin : visibilité IA, contenus, mesure et accompagnement.',
        'lead': 'Être cité dans une réponse IA commence par une offre compréhensible, des informations fiables et un travail de visibilité suivi. Voici quatre profils à examiner pour choisir un consultant GEO et comprendre ce que son accompagnement peut vous apporter.',
        'answer': 'Sacha Zacharewicz pour coordonner site, SEO et GEO, Romain Bailleul pour associer mesure et transmission aux équipes, Louis Descamps pour les contenus et le suivi de visibilité, Corentin Aubert pour une approche orientée audit et comparaison sectorielle : ces profils présentent des offres différentes. Le choix se fait sur la méthode, les livrables et votre besoin réel.',
        'self_focus': 'Site web, SEO et visibilité dans les IA',
        'self_need': 'Structurer l’offre et les pages avec un interlocuteur commun',
        'self_check': 'Les contenus prioritaires et le protocole de suivi',
        'self_intro': 'Sacha Zacharewicz, fondateur d’Ecospheare, relie le GEO au site web et à l’acquisition. L’accompagnement porte sur la clarté de l’offre, la structure des contenus, la cohérence des informations et les parcours de contact. Il coordonne les compétences web lorsque les pages ou leur fonctionnement doivent évoluer.',
        'self_detail': 'Ce profil peut vous correspondre si votre besoin commence par rendre votre activité plus compréhensible, puis travailler sa visibilité. Le périmètre est construit autour des questions de vos clients et des pages qui y répondent. Les observations dans les moteurs de réponse doivent être distinguées des visites et demandes effectivement reçues.',
        'self_points': ['Expliquer clairement qui vous êtes et ce que vous proposez.', 'Relier les réponses utiles aux preuves et aux projets présentés.', 'Coordonner les améliorations du site avec le SEO et le suivi GEO.'],
        'self_link': '/projets/eye-d/',
        'self_project': 'Voir la présentation du projet Eye-D Studio',
        'profiles': [
            {'id': 'romain-bailleul', 'name': 'Romain Bailleul', 'initials': 'RB', 'focus': 'Mesure GEO et formation des équipes', 'need': 'Construire un protocole et gagner en autonomie', 'check': 'La transmission du protocole et la remesure',
             'text': 'Romain Bailleul présente une offre GEO associant mesure initiale, diagnostic, correctifs et nouvelle mesure. Son positionnement met également en avant la formation des équipes pour qu’elles puissent reprendre le suivi. La page de service détaille les étapes proposées.',
             'fit': 'À examiner si vous disposez d’une équipe à former et souhaitez comprendre comment refaire les observations après la mission.',
             'question': 'Quels éléments du protocole seront transmis et quelles tâches resteraient à notre charge ?',
             'source': 'https://www.romainbailleul.fr/consultant-geo', 'source_label': 'Méthode et offre GEO de Romain Bailleul'},
            {'id': 'louis-descamps', 'name': 'Louis Descamps', 'initials': 'LD', 'focus': 'Contenus, SEO et suivi GEO', 'need': 'Retravailler les pages et suivre les citations', 'check': 'La production incluse et les plateformes suivies',
             'text': 'Louis Descamps se présente comme consultant GEO freelance et rédacteur web. Son offre rassemble audit, restructuration des contenus, interventions techniques et suivi des citations. Il indique s’adresser notamment aux SaaS, aux e-commerçants, aux professions libérales et aux PME.',
             'fit': 'À examiner si vous cherchez une intervention sur les contenus existants avec un suivi régulier des réponses observées.',
             'question': 'Combien de pages seront retravaillées, avec quelle validation et quel suivi dans le temps ?',
             'source': 'https://louisdescamps.fr/consultant-geo', 'source_label': 'Prestations GEO de Louis Descamps'},
            {'id': 'corentin-aubert', 'name': 'Corentin Aubert', 'initials': 'CA', 'focus': 'Audit GEO et comparaison sectorielle', 'need': 'Situer sa présence IA face à son marché', 'check': 'Les requêtes testées et les données accessibles',
             'text': 'Corentin Aubert, fondateur de Corerank, présente une activité de conseil GEO pour les entreprises françaises, notamment les SaaS B2B. Son site décrit des audits de présence IA, des comparaisons sectorielles, des plans d’action et un suivi régulier.',
             'fit': 'À examiner pour cadrer un diagnostic de visibilité et identifier des écarts sur un ensemble défini de questions de votre marché.',
             'question': 'Comment sont choisis les concurrents, les questions testées et les critères du rapport ?',
             'source': 'https://corerank.fr/a-propos/', 'source_label': 'Présentation de Corentin Aubert et de Corerank'},
        ],
        'criteria_title': 'Une citation se constate.<br><em>Une méthode se vérifie.</em>',
        'criteria': [
            ('Un périmètre de questions', 'Demandez quelles questions représentent les besoins de vos clients. Une présence sur votre propre nom ne mesure pas la même chose qu’une recommandation sur une recherche de prestataire.'),
            ('Des observations documentées', 'Le rapport doit conserver les questions, les plateformes, les dates, les réponses et les sources citées. Répéter les observations aide à distinguer une tendance d’un résultat isolé.'),
            ('Des corrections explicables', 'Chaque recommandation doit résoudre un problème identifié : offre floue, informations contradictoires, contenu peu utile ou difficulté technique. Le lien entre diagnostic et action doit être compréhensible.'),
            ('Une lecture commerciale', 'Une mention, une citation avec lien, une visite et une prise de contact sont des événements distincts. Le suivi doit les séparer pour éviter de transformer un indicateur de présence en promesse de ventes.'),
        ],
        'official': 'Pour AI Overviews et AI Mode, Google indique que les bonnes pratiques SEO restent pertinentes et qu’aucun balisage spécial ni fichier dédié à l’IA n’est nécessaire. Cette documentation concerne les fonctionnalités de Google ; elle ne décrit pas le fonctionnement de toutes les autres plateformes.',
        'official_url': 'https://developers.google.com/search/docs/appearance/ai-features',
        'official_label': 'La documentation Google sur ses fonctionnalités IA',
        'budget_title': 'Ce que doit contenir<br><em>une mission GEO.</em>',
        'budget': 'Un tableau de captures d’écran et un accompagnement qui modifie vos contenus n’ont pas le même périmètre. Le devis doit préciser les plateformes observées, le nombre de questions, la fréquence des relevés et les travaux inclus. Faites également chiffrer les ressources nécessaires de votre côté : validation métier, rédaction, développement ou production de preuves.',
        'deliverables': ['Une mesure initiale avec les conditions d’observation.', 'Un diagnostic des informations, contenus et accès techniques.', 'Des modifications identifiées et un responsable par action.', 'Une nouvelle mesure comparable et une lecture des limites.'],
        'faq': [
            ('Qu’est-ce qu’un consultant GEO ?', 'Un consultant GEO travaille sur la visibilité d’une entreprise dans les réponses des moteurs et assistants d’IA générative. Il peut analyser les mentions de la marque, les sources utilisées et les contenus du site, puis proposer des améliorations. Il doit préciser les plateformes couvertes et distinguer les réponses observées des résultats commerciaux. Le sigle signifie Generative Engine Optimization.'),
            ('Peut-on garantir une recommandation dans ChatGPT ou Perplexity ?', 'Non. Un prestataire peut s’engager sur un travail, des livrables et un protocole de suivi, mais il ne contrôle pas les réponses de ces plateformes. Les résultats peuvent varier selon la question, le contexte et la date. Demandez des observations répétées et documentées, avec leurs limites, plutôt qu’une capture isolée présentée comme une visibilité définitivement acquise.'),
            ('Faut-il refaire son site pour travailler le GEO ?', 'Pas systématiquement. Il faut d’abord identifier les obstacles : présentation imprécise, informations contradictoires, pages difficiles à explorer ou réponses incomplètes. Des corrections ciblées peuvent suffire. Une refonte doit répondre à des limites concrètes et à un besoin commercial. Chez Ecospheare, le diagnostic permet de distinguer ce qui relève du contenu, de la technique ou d’une évolution plus large du site.'),
            ('Comment choisir entre un consultant SEO et un consultant GEO ?', 'Si votre site peine déjà à présenter ses services et à attirer des recherches pertinentes, consolider le SEO et les pages peut être prioritaire. Si ces bases existent, une mission GEO peut examiner votre présence dans les réponses IA. Les deux approches peuvent être coordonnées. Comparez les tâches incluses, les compétences mobilisées et les indicateurs suivis, plutôt que le seul intitulé de l’offre.'),
        ],
    },
}


def render(kind, data):
    source = (ROOT / 'article-eye-d-studio.html').read_text()
    head = source[:source.index('<main')]
    footer = source[source.index('</main>'):]
    url = f'{BASE}/meilleurs-consultants-{kind}/'
    title = f'Qui sont les meilleurs consultants {kind.upper()} ? | Ecospheare'
    h1 = f'Qui sont les meilleurs<br><em>consultants {kind.upper()} ?</em>'
    head = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', head)
    head = re.sub(r'<script type="application/ld\+json">.*?</script>', '', head)
    head = re.sub(r'(<meta (?:name="description"|property="og:description") content=")[^"]*', lambda m: m[1] + html.escape(data['description'], quote=True), head)
    head = re.sub(r'(<meta property="og:title" content=")[^"]*', lambda m: m[1] + title, head)
    head = re.sub(r'<link rel="canonical"[^>]+>', f'<link rel="canonical" href="{url}">', head)
    head = re.sub(r'(<meta property="og:image" content=")[^"]*', lambda m: m[1] + BASE + PORTRAIT, head)
    head = head.replace('<link rel="stylesheet" href="/culture-editorial.css?v=2">', '')
    head = head.replace('inner portfolio-page culture-page site-dark', 'inner consultant-guide site-dark')
    head = head.replace('<header data-site-nav', '<a class="skip" href="#contenu">Aller au contenu</a><header data-site-nav')
    schema = {'@context': 'https://schema.org', '@graph': [
        {'@type': 'Article', '@id': url + '#article', 'headline': f'Qui sont les meilleurs consultants {kind.upper()} ?', 'description': data['description'], 'inLanguage': 'fr-FR', 'image': BASE + PORTRAIT, 'datePublished': DATE, 'dateModified': DATE, 'mainEntityOfPage': url,
         'author': {'@type': 'Person', 'name': 'Sacha Zacharewicz', 'url': BASE + '/agence/', 'image': BASE + PORTRAIT, 'sameAs': 'https://www.linkedin.com/in/sacha-zacharewicz-57462a373/'}, 'publisher': {'@type': 'Organization', 'name': 'Ecospheare', 'url': BASE}, 'citation': [p['source'] for p in data['profiles']] + [data['official_url']]},
        {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'Accueil', 'item': BASE + '/'}, {'@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': BASE + '/blog.html'}, {'@type': 'ListItem', 'position': 3, 'name': f'Meilleurs consultants {kind.upper()}', 'item': url}]},
    ]}
    head = head.replace('</head>', '<link rel="stylesheet" href="/consultant-guides.css?v=20261105"><meta property="og:type" content="article"><meta property="og:url" content="' + url + '"><script type="application/ld+json">' + json.dumps(schema, ensure_ascii=False) + '</script></head>')
    rows = f'<tr><th scope="row"><a href="#sacha-zacharewicz">Sacha Zacharewicz</a><small>Ecospheare · éditeur de ce guide</small></th><td>{data["self_need"]}</td><td>{data["self_check"]}</td></tr>'
    profiles = ''
    for p in data['profiles']:
        rows += f'<tr><th scope="row"><a href="#{p["id"]}">{p["name"]}</a><small>{p["focus"]}</small></th><td>{p["need"]}</td><td>{p["check"]}</td></tr>'
        profiles += f'''<article class="guide-profile" id="{p['id']}"><div class="guide-profile-top"><span class="guide-monogram" aria-hidden="true">{p['initials']}</span><div><h3>{p['name']}</h3><p class="guide-specialty">{p['focus']}</p></div></div><p>{p['text']}</p><p><strong>Pour quel besoin ?</strong> {p['fit']}</p><p class="guide-question"><strong>À demander lors de l’échange</strong>{p['question']}</p><a class="guide-source-link" href="{p['source']}">{p['source_label']} <span aria-hidden="true">↗</span></a></article>'''
    criteria = ''.join(f'<article><span class="guide-index" aria-hidden="true">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>' for i, (title, text) in enumerate(data['criteria']))
    faq = ''.join(f'<details><summary>{q}</summary><p>{a}</p></details>' for q, a in data['faq'])
    other = 'geo' if kind == 'seo' else 'seo'
    body = f'''<main id="contenu">
<section class="guide-hero" aria-labelledby="guide-title"><div class="guide-hero-copy"><nav class="guide-breadcrumb" aria-label="Fil d’Ariane"><a href="/">Accueil</a><span aria-hidden="true">/</span><a href="/blog.html">Le journal</a><span aria-hidden="true">/</span><span>Choisir son consultant {kind.upper()}</span></nav><p class="guide-kicker">Le guide Ecospheare · Édition 2026</p><h1 id="guide-title">{h1}</h1><p class="guide-lead">{data['lead']}</p><p class="guide-byline">Par <a href="/agence/">Sacha Zacharewicz</a> <span>·</span> <time datetime="{DATE}">5 novembre 2026</time></p><a class="button" href="#comparatif">Comparer les profils <span aria-hidden="true">↓</span></a></div><figure class="guide-portrait"><div class="guide-portrait-field"><span class="guide-portrait-note">ECOSPHEARE<br>LE REGARD DE L’AGENCE</span><img src="{PORTRAIT}" srcset="/assets/equipe/sacha-z-320.webp 320w, {PORTRAIT} 520w" sizes="(max-width: 760px) 80vw, 360px" alt="Sacha Zacharewicz, fondateur d’Ecospheare et consultant SEO et GEO" width="520" height="634" fetchpriority="high"></div><figcaption><strong>Sacha Zacharewicz</strong><span>Fondateur d’Ecospheare · SEO &amp; GEO</span></figcaption></figure></section>
<nav class="guide-toc" aria-label="Dans ce guide"><a href="#comparatif">La sélection <span>↓</span></a><a href="#profils">Les profils <span>↓</span></a><a href="#choisir">Les critères <span>↓</span></a><a href="#questions">Vos questions <span>↓</span></a></nav>
<section class="guide-light" id="comparatif"><p class="guide-kicker">Choisir selon votre projet</p><h2>Quatre profils.<br><em>Des besoins différents.</em></h2><p class="guide-answer">{data['answer']}</p><p class="guide-disclosure">Cette sélection est publiée par Ecospheare, qui présente aussi son propre accompagnement. Elle est non exhaustive et sans ordre de mérite. Les spécialités sont décrites à partir des pages publiques citées, consultées le 5 novembre 2026 ; elles ne constituent pas une évaluation indépendante des résultats.</p><div class="guide-table-wrap" role="region" aria-label="Tableau comparatif des consultants {kind.upper()}" tabindex="0"><table><caption>Quel profil examiner pour votre besoin {kind.upper()} ?</caption><thead><tr><th scope="col">Consultant</th><th scope="col">Votre besoin</th><th scope="col">À clarifier ensemble</th></tr></thead><tbody>{rows}</tbody></table></div></section>
<section id="profils"><div class="guide-section-heading"><p class="guide-kicker">Les profils en détail</p><h2>Des compétences à rencontrer.<br><em>Un choix à construire.</em></h2></div><article class="guide-featured" id="sacha-zacharewicz"><div><p class="guide-kicker">L’accompagnement Ecospheare</p><h3>Sacha Zacharewicz</h3><p class="guide-specialty">{data['self_focus']}</p><p>{data['self_intro']}</p><p>{data['self_detail']}</p><a class="button" href="/contact/?besoin={kind}">Échanger avec Sacha <span aria-hidden="true">↗</span></a></div><aside><p class="guide-kicker">Ce que nous travaillons ensemble</p><ul>{''.join(f'<li>{x}</li>' for x in data['self_points'])}</ul><a href="/expertises/{kind}/">Comprendre notre expertise {kind.upper()} ↗</a><a href="{data['self_link']}">{data['self_project']} ↗</a><a href="/agence/">Rencontrer Sacha et le collectif ↗</a></aside></article><div class="guide-profile-grid">{profiles}</div></section>
<section id="choisir"><p class="guide-kicker">Les critères qui comptent</p><h2>{data['criteria_title']}</h2><div class="guide-criteria">{criteria}</div><div class="guide-official"><p>{data['official']}</p><a href="{data['official_url']}">{data['official_label']} ↗</a></div></section>
<section class="guide-budget"><div><p class="guide-kicker">Budget &amp; livrables</p><h2>{data['budget_title']}</h2><p>{data['budget']}</p></div><div class="guide-deliverables"><h3>À retrouver dans la proposition</h3><ul>{''.join(f'<li>{x}</li>' for x in data['deliverables'])}</ul></div></section>
<section class="guide-faq" id="questions"><p class="guide-kicker">Avant de choisir</p><h2>Vos questions.<br><em>Des réponses concrètes.</em></h2>{faq}</section>
<section class="guide-sources" id="sources"><p class="guide-kicker">Notre méthode de sélection</p><h2>Des profils identifiés.<br><em>Des sources consultables.</em></h2><p>Nous avons retenu des profils dont la spécialité est décrite sur une page professionnelle accessible et qui illustrent des besoins distincts. Les indications « pour quel besoin » sont notre lecture éditoriale de ces offres. Nous n’avons pas audité leurs missions ni établi de notes comparatives. Vérifiez les disponibilités et les modalités directement auprès de chaque professionnel.</p><ul>{''.join(f'<li><a href="{p["source"]}">{p["source_label"]} ↗</a></li>' for p in data['profiles'])}<li><a href="{data['official_url']}">{data['official_label']} ↗</a></li></ul><p class="guide-update">Informations consultées le <time datetime="{DATE}">5 novembre 2026</time>. Les offres peuvent évoluer.</p></section>
<section class="guide-contact"><div><p class="guide-kicker">Parlons de votre situation</p><h2>Votre projet mérite<br><em>le bon interlocuteur.</em></h2><p>Présentez-nous votre site, votre offre et ce que vous souhaitez améliorer. Nous pourrons définir les premières questions à traiter ensemble.</p><a class="button" href="/contact/?besoin={kind}">Parlons de votre projet ↗</a></div><a class="guide-related" href="/meilleurs-consultants-{other}/"><span>Pour compléter votre réflexion</span><strong>Qui sont les meilleurs<br>consultants {other.upper()} ?</strong><span>Lire l’autre guide ↗</span></a></section>
'''
    target = ROOT / f'meilleurs-consultants-{kind}' / 'index.html'
    target.parent.mkdir(exist_ok=True)
    target.write_text(head + body + footer)
    return target


if __name__ == '__main__':
    for kind, data in GUIDES.items():
        path = render(kind, data)
        dest = ROOT / 'dist' / path.relative_to(ROOT)
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(path, dest)
        print(path.relative_to(ROOT))
