#!/usr/bin/env python3
"""Strengthen the four existing product/service pages around one search intent each."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

PAGES = {
"expertises/web-apps/index.html": {
 "replacements": {
  "Développement d’application web | Ecospheare Agency":"Développement application web sur mesure | Ecospheare",
  "Ecospheare conçoit votre application web sur mesure : espace client, outil métier ou plateforme, avec des parcours adaptés à vos usages.":"Agence de développement d’application web, Ecospheare crée des applications web et métier sur mesure, plateformes et portails clients adaptés à vos usages.",
  "Développement d’application web</h1>":"Développement d’application web sur mesure</h1>",
  "Une application web pour simplifier un usage concret":"Une agence de développement d’application web pour vos usages",
  "Un parcours clair vaut mieux qu’une accumulation d’écrans.":"La création d’une application web commence par les opérations essentielles. Un parcours clair vaut mieux qu’une accumulation d’écrans, qu’il s’agisse d’un portail client, d’une plateforme web ou d’une application métier sur mesure."
 },
 "faq":[("Pourquoi choisir une application web sur mesure ?","Elle devient pertinente quand plusieurs utilisateurs doivent partager des données, suivre un processus ou accéder au même outil depuis un navigateur. Nous comparons ce besoin avec les solutions existantes avant de recommander un développement spécifique."),("Pouvez-vous développer un portail client ?","Oui. Un portail client peut réunir les demandes, documents, statuts et échanges utiles. Les droits d’accès, les notifications et les connexions au système existant sont définis pendant le cadrage."),("Comment se déroule la création d’une application web ?","Le projet passe par le cadrage des usages, la conception des parcours, le développement progressif et la recette. Les fonctions prioritaires sont testées avant les modules secondaires afin de limiter les risques."),("Une application web est-elle adaptée au mobile ?","Nous concevons les parcours pour les formats nécessaires au projet. Si l’usage exige des fonctions profondes du téléphone, du hors ligne ou une distribution en boutique, une application mobile peut être plus appropriée.")]
},
"expertises/saas/index.html": {
 "replacements": {
  "Développement SaaS | Ecospheare Agency":"Agence développement SaaS | Ecospheare",
  "Ecospheare conçoit et développe votre application SaaS : cadrage du produit, parcours utilisateurs, abonnement, données et évolution progressive.":"Agence SaaS, Ecospheare accompagne le développement de logiciels SaaS, du cadrage produit et des abonnements à une mise en service progressive.",
  "Développement SaaS</h1>":"Agence développement SaaS</h1>",
  "Une application SaaS centrée sur sa promesse":"Un développement SaaS centré sur la promesse du produit",
  "Un prototype peut d’abord valider un parcours":"Une agence de création MVP peut d’abord valider un parcours"
 },
 "faq":[("Que fait une agence développement SaaS ?","Elle aide à définir le produit, ses utilisateurs, son modèle d’accès et ses fonctions prioritaires. Elle organise ensuite la conception, le développement, les tests et les conditions nécessaires pour faire évoluer le logiciel."),("Quelle différence entre MVP et prototype ?","Un prototype sert surtout à tester une idée ou un parcours. Un MVP est une première version utilisable qui fournit la valeur principale à un public défini. Son périmètre reste volontairement limité."),("Le développement d’un logiciel SaaS inclut-il l’abonnement ?","Il peut inclure les comptes, les niveaux d’accès, la facturation et les règles de résiliation si cela fait partie du périmètre. Ces flux sont conçus avec attention car ils touchent aux droits et aux paiements."),("Comment préparer l’évolution du SaaS ?","Nous distinguons les anomalies, les retours d’usage et les nouvelles idées. Les évolutions sont priorisées selon la valeur apportée, les dépendances techniques, les données disponibles et le coût de maintenance futur.")]
},
"expertises/crm/index.html": {
 "replacements": {
  "CRM sur mesure | Ecospheare Agency":"CRM sur mesure | Ecospheare",
  "Centralisez votre suivi commercial avec un CRM sur mesure : contacts, historique, pipeline et tableaux de bord adaptés à votre équipe par Ecospheare.":"Ecospheare développe votre CRM sur mesure : contacts, pipeline, automatisations et tableaux de bord adaptés à votre équipe commerciale.",
  "CRM sur mesure</h1>":"CRM sur mesure</h1>",
  "Un CRM sur mesure pour rendre le suivi commercial lisible":"Un logiciel de gestion sur mesure pour relier vos opérations",
  "Peut-on relier le site internet à un CRM sur mesure ?":"Peut-on relier un site internet à un CRM ou ERP sur mesure ?"
 },
 "faq":[("Quelle différence entre un CRM et un ERP sur mesure ?","Le CRM organise principalement les relations avec prospects et clients. L’ERP relie davantage d’opérations comme les achats, stocks, interventions ou facturation. Un cadrage détermine les modules réellement nécessaires."),("Pourquoi développer un CRM sur mesure ?","Le sur mesure est utile lorsque votre parcours commercial, vos rôles ou vos connexions ne rentrent pas correctement dans une solution standard. Nous vérifions d’abord si une configuration d’un outil existant pourrait suffire."),("Peut-on créer un tableau de bord sur mesure ?","Oui, à condition de définir des indicateurs compréhensibles et des données fiables. Nous précisons leur source, leur fréquence de mise à jour et les personnes autorisées à les consulter."),("Comment reprendre les données de l’ancien outil ?","La migration commence par un inventaire des champs, formats, doublons et informations sensibles. Un échantillon est contrôlé avant la reprise complète et les règles de correspondance sont documentées.")]
},
"expertises/sites-web/index.html": {
 "replacements": {
  "Création de site web | Ecospheare Agency":"Agence création site web sur mesure | Ecospheare",
  "Ecospheare conçoit votre site web : design, contenus, développement et référencement. Un parcours clair pour présenter votre offre et faciliter le contact.":"Agence création site web, Ecospheare conçoit des sites internet sur mesure : vitrine professionnelle, design, contenus, développement et SEO.",
  "Création de site web</h1>":"Agence création site web sur mesure</h1>",
  "Créer un site web qui fait comprendre votre offre":"Créer un site internet sur mesure qui explique votre offre",
  "Développement et référencement</h2>":"Agence développement web et référencement</h2>"
 },
 "faq":[("Pourquoi choisir une agence création site web ?","Une agence réunit le cadrage, la structure, le design, le développement et la préparation du référencement. Vous disposez d’un parcours cohérent et d’un interlocuteur pour organiser les décisions et la mise en ligne."),("Quel contenu prévoir pour un site vitrine professionnel ?","Le site doit expliquer votre offre, les publics concernés, votre manière de travailler et la prochaine étape. Les preuves disponibles, les réponses aux objections et les coordonnées complètent les pages de service."),("Qu’apporte la création de site web avec IA ?","L’IA peut aider à explorer une structure ou préparer des variantes, mais les informations, le ton et la validation restent sous votre contrôle. Elle ne remplace ni le positionnement, ni la vérification, ni la qualité technique."),("Comment préserver le SEO lors d’une refonte ?","Nous inventorions les pages et adresses existantes, définissons les redirections, conservons les contenus utiles et vérifions l’indexation. Les performances sont observées après le lancement sans promettre un classement.")]
}}

for rel, data in PAGES.items():
    path = ROOT / rel
    text = path.read_text()
    for old, new in data['replacements'].items():
        text = text.replace(old, new)
    if 'class="service-faq"' not in text:
        items = ''.join(f'<article><h3>{q}</h3><p>{a}</p></article>' for q,a in data['faq'])
        faq = f'<section class="service-faq" aria-labelledby="service-faq"><p class="eyebrow">Questions fréquentes</p><h2 id="service-faq">Questions sur cette expertise</h2><div>{items}</div></section>'
        text = text.replace('<nav class="expert-siblings"', faq + '<nav class="expert-siblings"', 1)
    path.write_text(text)
    mirror = ROOT / 'dist' / rel
    mirror.parent.mkdir(parents=True, exist_ok=True)
    mirror.write_text(text)
