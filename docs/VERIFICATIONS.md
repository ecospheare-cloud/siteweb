# Vérifications ECOSPHEARE

Date : 11 octobre 2026. Le périmètre distingue mesures locales, contrôles de code et essais manuels. Il ne constitue pas une certification WCAG complète.

## Lighthouse mobile dans Chrome (avant ajout du film)

Audit lancé dans le panneau Lighthouse du Chrome de Mahé sur `http://localhost:4173/`, mode Navigation, Mobile. Version du rapport : Lighthouse 13.4.1. Émulation affichée pendant la mesure :412×823. Profil Chrome existant, serveur sur la machine locale ; ces résultats ne sont pas des données terrain de visiteurs.

| Mesure | Premier passage | Après optimisation |
|---|---:|---:|
| Performance |94|**100**|
| Accessibilité automatisée |100|**100**|
| Bonnes pratiques |100|**100**|
| SEO |66|66|
| First Contentful Paint |0,9s|0,9s|
| Largest Contentful Paint |3,2s|**1,7s**|
| Total Blocking Time |0ms|0ms|
| Cumulative Layout Shift |0|0|
| Speed Index |0,9s|0,9s|

Optimisations entre les deux mesures : fonte locale variable passée de TTF164700octets à WOFF2Latin24576octets ; compression gzip des réponses textuelles sur le serveur de prévisualisation. Pas de changement de machine ni de suppression d’extensions pour améliorer artificiellement le résultat.

Le score SEO est limité par les directives intentionnelles de non-indexation (`noindex,nofollow`, `Disallow /`). Elles protègent la prévisualisation incomplète sur le plan éditorial/juridique. Elles doivent être retirées lors du déploiement public avec le domaine canonique, les informations définitives et un sitemap. Aucun résultat de positionnement n’est déduit de Lighthouse.

Les valeurs ont été lues dans l’interface Lighthouse et consignées dans `lighthouse-measures.json`. Ce fichier est un relevé, pas le rapport brut exporté. L’export natif n’a pas été finalisé, le dialogue de sauvegarde ayant changé de contexte. Le 100d’accessibilité est celui des règles automatisées sur la page d’accueil, pas une preuve de conformité de tous les parcours.

## Intégrité et serveur

`npm run build` puis `npm run check` : succès.

- 19 pages générées, une balise H1 et une description par page.
- 432 références internes de liens/ressources résolues dans le dossier généré.
- 32 occurrences d’images avec attribut alt et dimensions intrinsèques.
- IDs uniques par page ; labels associés aux champs ; langue française ; lien d’évitement.
- Absence de placeholders de brief non remplacés dans les pages, de `transition:all` et de suppression générale du focus.
- Vérification de syntaxe Node sur le script navigateur et le serveur.
- 19 routes HTTP testées :200 ; route inexistante :404 ; compressiongzip vérifiée.

Le contrôle statique peut être relancé sans dépendance externe. Il ne remplace pas une inspection visuelle.

## Contrastes de tokens calculés

Rapports calculés avec la luminance relative sRGB et le seuil4,5:1 pour du texte standard :

| Texte / fond | Rapport |
|---|---:|
| Blanc / bleu315bff |5,16:1|
| Bleu2048df / papierf8f9fc |6,53:1|
| Marine080e35 / papier |17,74:1|
| Secondaire555c75 / papier |6,28:1|
| Placeholder64708a / blanc |4,97:1|
| Texte pâlec2ccec / marine |11,69:1|

Les surimpressions sur image ne sont pas garanties par ce calcul. Le hero a été inspecté visuellement et reçoit un voile bleu pour écarter les reflets lumineux de la zone de texte.

## Parcours manuels dans Chrome

| Parcours | Résultat constaté |
|---|---|
| Accueil desktop | Hero lisible, CTA visible, navigation et texture affichées |
| Expertises accueil | Ouverture GEO effective, contenu et lien d’expertise exposés dans l’arbre accessible |
| Catalogue | Filtre Identité actif, résultats masqués/affichés, `aria-pressed` et URL `?filtre=identite` mis à jour |
| Accueil390×844 | Composition mobile, CTA visible, texte sur deux lignes au hero |
| Menu mobile | Ouverture effective, liens et e-mail visibles ; Échap ferme et replace le focus |
| Contact390×844 | Labels, champs, select et bouton sur une colonne, pas de découpe visible |
| Présélection | `?besoin=google-ads` sélectionne Google Ads |
| Formulaire vide | Activation du bouton renvoie le focus sur le nom requis |
| Brief fictif | Saisie au clavier, préparation d’une URI mailto encodée avec les informations saisies |
| Copie du brief | Message de succès affiché, avec annonce accessible |
| Page Sites web mobile | Titre, fil d’Ariane, introduction, CTA et début des livrables lisibles |
| Console observée | Pas d’erreur JavaScript applicative pendant les parcours ; message informatif de lancement du protocole mailto |

Le message fictif utilise `test@example.com`. Aucun envoi d’e-mail n’a été effectué. Le bouton de téléchargement a été revu dans le code ; son fichier téléchargé n’a pas été ouvert pour validation manuelle.

## Accessibilité et mouvement : revue de code

- Navigation par vrais liens ; actions par boutons ou disclosures natifs.
- Focus visible3px, textes alternatifs, images décoratives ignorées par les technologies d’assistance.
- `aria-expanded` sur le menu ; état pressé et annonce live pour les filtres.
- Validation native des champs requis/e-mail ; pas de formulaire qui simule une transmission serveur.
- `prefers-reduced-motion:reduce` coupe les animations/transitions, les transformations au survol et le défilement doux. Vérification du CSS, pas d’essai sur un appareil physique configuré ainsi.
- Mise à jour : une vidéo décorative en boucle a été ajoutée à la demande du client, avec pause et réduction du mouvement. Voir MOTION.md. Aucun scroll capturé.
- Contenus et accordéons utilisables sans JavaScript ; menu mobile, filtres et préparation du brief nécessitent JavaScript.

## Budget de ressources

Après optimisation : CSS~21ko, JS applicatif~3,5ko, fonte~24,6ko, texture desktop~81ko/mobile~30ko. Le HTML de l’accueil est~10,6ko avant gzip. Les images en dessous du premier écran sont chargées paresseusement ; pas de framework runtime, de bibliothèque d’animation, de carte externe ou de traceur.

Les tailles exactes et empreintes SHA-256 sont dans `asset-manifest.json`. Les temps de chargement sur hébergement distant, connexion réelle et terminal mobile restent à mesurer après déploiement.

## Limites restantes

Symbole SVG officiel reçu et intégré ; signature textuelle composée en Manrope. Mentions légales et politique de conservation à finaliser avec l’éditeur. Rôle précis et résultats des collaborations à enrichir ; quatre projets cités n’ont pas de dossier visuel retrouvé. Formulaire par messagerie locale, sans backend d’envoi. Pas de test Safari/Firefox, de lecteur d’écran humain, de smartphone physique, d’INP terrain ou de parcours complet sur chaque fiche. Les contenus ont été protégés de l’indexation pour cette prévisualisation.


## Mise à jour animation

Les anciens scores Lighthouse ne mesurent pas la version animée. Contrôles actualisés, poids et limites : voir MOTION.md.

## Refonte du 12 octobre

Les résultats et captures actualisés de la deuxième direction sont documentés dans `REFONTE-LANDOR.md`. Les scores Lighthouse et descriptions de la première interface ci-dessus sont historiques. Aucun score de performance antérieur n’est attribué à la nouvelle composition.
