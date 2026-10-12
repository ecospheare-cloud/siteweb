# ECOSPHEARE · système de design original

## Intention

Une agence d’acquisition qui rend le digital compréhensible. La composition adopte l’ampleur éditoriale de LANDOR, sans reprendre sa marque. L’univers ECOSPHEARE part des bleus et du symbole pointillé présents dans la planche QICS. Il s’agit d’une proposition de direction artistique, pas d’une charte officielle retrouvée.

Lecture du brief : public B2B, conversion de visites en demandes, besoin de rendre cinq expertises cohérentes et d’étayer la capacité de réalisation par des travaux. Intensité retenue : variance7/10, mouvement3/10, densité4/10. Les micro-interactions expliquent les actions et les changements d’état ; aucun scroll imposé. Le hero comporte désormais une boucle décorative contrôlable, demandée par le client.

Références : audit LANDOR local ; collection Awesome DESIGN.md, lecture Stripe pour la hiérarchie et la séparation marketing/interaction, sans transférer les couleurs ni les composants de Stripe. Skills appliqués : Taste, Awesome DESIGN.md, Image-to-code, Imagegen, Web Design Guidelines. Pour le navigateur, CUA natif Chrome conformément aux règles de la session.

## Références visuelles générées avant intégration

Les études de section `design/hero.webp`, `expertises.webp`, `methode.webp`, `projets.webp` et `footer.webp` ont servi à fixer l’échelle, les blancs et la composition. Ce sont des études conceptuelles, pas des captures des sites clients. Les visuels conceptuels de projets de `projets.webp` ne sont pas utilisés comme preuves dans le site.

Analyse et transposition :

| Étude | Invariants intégrés | Adaptation nécessaire |
|---|---|---|
| Hero | Bleu plein, signature gauche, titre ample en deux lignes, forme lumineuse droite, CTA blanc | Voile bleu sous le titre pour stabiliser le contraste ; recadrage vertical sur mobile |
| Expertises | Titre bleu, espace important, matière à gauche, cinq disclosures à droite | Réduction du visuel décoratif sur mobile ; texte HTML et accordéons natifs |
| Projets | Deux colonnes de grands médias, légendes extérieures, lien de catalogue | Remplacement des images conceptuelles par les fichiers du portfolio QICS |
| Méthode | Fond marine, quatre étapes reliées, blanc et bleu | Infographie CSS lisible sans image ; grille2×2 mobile ; aucune boucle décorative |
| Footer | Transition vers le bleu pâle, grand appel au contact, grand mot-symbole | Contraste marine, adresse réelle, suppression de liens sociaux non fournis |

## Palette

| Token | Valeur | Usage |
|---|---|---|
| `--blue` | `#315bff` | Matière, CTA pleins, accent principal |
| `--blue-dark` | `#2048df` | Texte et liens bleus sur clair, hover |
| `--navy` | `#080e35` | Corps, section de méthode, CTA sombre |
| `--paper` | `#f8f9fc` | Fond de lecture |
| `--pale` | `#e5ebff` | Encarts, messages de formulaire |
| `--muted` | `#555c75` | Texte secondaire |
| `--line` | `#cbd1df` | Séparateurs non essentiels |

Les changements de fond entre hero, méthode et footer sont intentionnels : ils répondent à la référence et à la narration demandées. Cela prime sur le verrou de thème unique par défaut du skill Taste. L’accent reste bleu dans toute l’expérience. Pas de thème sombre système supplémentaire : la composition dispose de ses propres zones claires/sombres avec contrastes définis.

## Typographie et logo

Manrope variable, licence SIL OFL incluse. Fichier local, sans requête Google Fonts au chargement. Titres poids450, corps400, liens/labels600, mot-symbole650. Interlettrage des titres−.055em, interligne1.1 ; corps16px/1.6, grandes introductions19–25px. Le texte ne se trouve jamais dans une image de maquette.

Les SVG officiels blanc et noir ont été fournis le 11 octobre. Le symbole original figure dans le header et le favicon ; la signature textuelle reste composée en Manrope. Le film du hero est généré dans Gemini puis raccordé au SVG original rasterisé : voir `MOTION.md`.

## Espaces et responsive

Largeur maximale1680px. Marges fluides `clamp(22px,4.6vw,80px)`. Le texte respire davantage que dans les gouttières médias très étroites de LANDOR, afin de servir un propos de services plus explicite.

- ≥1051px : navigation complète ; expertises en deux colonnes ; travaux deux colonnes ; méthode quatre étapes horizontales.
- ≤1050px : intervalles réduits, adaptation de l’infographie.
- ≤800px : menu replié, lecture une colonne pour services/contact, méthode2×2, disparition du visuel secondaire d’expertises.
- ≤520px : projets une colonne, formulaire une colonne, titres et marges adaptés, galerie de cas empilée.
- Aucun `user-scalable=no`, aucun verrou de zoom, aucun carrousel obligatoire pour accéder aux contenus.

Rayons :12px médias,7px champs,8px panneau de résultat, pilules100px. Les contours servent la fonction, sans empilement de cartes décoratives.

## Interactions et timings implémentés

| Interaction | Déclencheur | Effet | Durée | Réduction du mouvement |
|---|---|---|---|---|
| Entrée hero | Chargement de page | Opacité0→1, translationY16→0 |750ms, retards0/100/180ms | Désactivée |
| CTA | Hover | TranslationY−2px + couleur |200ms | Translation supprimée |
| Flèche de lien | Hover/focus | Translation3 px/−3 px |220ms | Supprimée |
| Image de projet | Hover/focus | Scale1→1.035 |450 ms | Supprimée |
| Menu mobile | Clic/Entrée/Espace | Panneau et icône X |250ms /240ms | Instantané |
| Accordéon | Activation native | Ouverture, plus→moins, contenu |240ms /200ms | Instantané |
| Filtre | Clic | Résultats et `aria-pressed`, URL, annonce live | Immédiat | Identique |
| Formulaire | Validation | Préparation `mailto`, panneau de secours | Immédiat | Identique |

Easing principal `cubic-bezier(.22,1,.36,1)`. Le code anime uniquement transform/opacité pour les déplacements ; pas de `transition:all`, pas de boucle de scroll JS. Le scroll reste natif. Échap ferme le menu et replace le focus sur sa commande. Clic hors header ferme le panneau. Il s’agit d’une navigation non modale : le fond n’est pas rendu inerte, le focus n’est pas piégé.

## Contenu et conversion

Les pages suivent besoin → approche → livrables → mesure → questions → prise de contact. GEO et SEO n’affichent aucune garantie de classement/citation. Google Ads sépare budget média et accompagnement. Les outils métier ne sont pas présentés comme un SaaS déjà commercialisé.

Les collaborations sont attribuées à ECOSPHEARE × QICS sur la base de la déclaration de Mahé. Les détails des rôles et résultats ne sont pas inventés. EYE-D conserve le crédit de ses créations3D. Quatre projets sans dossier trouvé sont cités dans une section distincte, sans fausse étude de cas.

## Préflight et écarts assumés

Titres réels, texte français relu, aucun faux chiffre, pas de témoignage fabriqué, cibles principales44 px ou plus, focus visible, médias dimensionnés, contenu essentiel sans JS, filtres exposés par URL, pas de trackers. Les boutons de contact se retrouvent dans le header et en bas de page : répétition délibérée pour les pages longues. L’infographie utilise des orbites de sens métier, et la texture des points cohérents avec la planche de marque ; les interdictions décoratives génériques de Taste ne priment pas sur ce brief.

Pas de copie exacte de la texture LANDOR : les vidéos d’eau n’ont pas été réutilisées. Le rendu ECOSPHEARE livré est une création originale. Pas de promesse de conformité WCAG complète ni de score de performance sans mesure.

## Direction active depuis le 12 octobre 2026

La nouvelle demande du client remplace la première direction ci-dessus. La référence principale est désormais la composition LANDOR : signature monumentale, panneau blanc superposé, médias presque bord à bord, manifeste bleu, navigation centrée et sortie beige. Les règles génériques des skills qui interdiraient ces choix sont écartées au profit du brief explicite. Variance 7/10, mouvement 6/10, densité 3/10. Voir `REFONTE-LANDOR.md` pour les tokens, composants, comparaisons et limites actualisés.

## Extension conversion du 12 octobre 2026

La direction active est complétée par « Lumière utile » : quatre illustrations optiques originales et une infographie de méthode en HTML. Voir `../design/infographies/README.md` pour les invariants, prompts, exports et critères de validation. Variance 7/10 conservée, mouvement 2/10 pour les nouveaux modules, densité 5/10 pour expliquer les prestations. Les boucles de marque existantes restent inchangées. Les modules illustrés restent statiques à tous les réglages de mouvement.

La palette de référence de cette extension est celle d’`editorial.css` : bleu #0e1adf, blanc, jaune #ecfd01 ; corps gris #34384d sur blanc. Manrope, légendes HTML de 13px minimum, rayons 12px, chapitres fluides et chronologie verticale mobile. Les grands aplats alternés et la répétition raisonnée des liens de contact sont maintenus selon le brief. Les règles génériques de Taste sur le thème unique et l’absence de CTA répétés ne remplacent pas ce parcours éditorial long.

La collection Awesome DESIGN.md/Stripe sert de référence pour séparer la matière d’illustration et le contenu fonctionnel, sans reprendre son identité. Les images ne remplacent jamais une explication, un résultat documenté ni un produit réel.


## Mise à jour du 12 octobre : audit Chrome et mouvement

La [passe Chrome et sa matrice de transposition](AUDIT-LANDOR-CHROME.md) complètent ce document. Le site intègre désormais un header directionnel, un manifeste épinglé sous le panneau blanc, un carrousel en fondu de 600 ms / intervalle de 6 s, des légendes mobiles séparées et des héros immersifs sur les fiches projets. Les anciennes mentions de ces fonctions comme absentes sont historiques. Validation : 19 pages, 592 références, 59 images avec alt et dimensions ; contrôles navigateur desktop/mobile et test des états du film réussis. Le mouvement ScrollTrigger dispose d’un repli reduced-motion, sans validation sur appareil physique.
