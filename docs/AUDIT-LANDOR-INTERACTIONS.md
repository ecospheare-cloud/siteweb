# LANDOR — Spécification technique des pages, du scroll et des interactions

**Relevé du 12 octobre 2026 · Référence anglaise · ECOSPHEARE**

Ce document décrit le système de composition et de mouvement de LANDOR afin de guider une reconstruction fidèle avec l’identité et les contenus ECOSPHEARE. Il complète et corrige l’[audit initial](AUDIT-LANDOR.md). Les règles ci-dessous décrivent LANDOR ; elles ne signifient pas que le site ECOSPHEARE les implémente déjà.

## 1. Précision, couverture et preuves

### Niveaux de preuve

- **M — Mesuré** : `getBoundingClientRect`, style calculé, attribut ou état média lus dans le DOM du navigateur après une action. Les mesures sont en pixels CSS, non en pixels Retina.
- **O — Observé** : état visible, interaction effectivement déclenchée, destination effectivement ouverte.
- **C — Déclaré** : règle du CSS, paramètre du JavaScript public ou structure CMS livrée avec la page. Une durée déclarée n’est pas un chronométrage de la présentation réelle.
- **I — Interprétation technique** : conséquence déduite des paramètres vérifiés, explicitement séparée d’une observation.
- **NV — Non vérifié** : pas de conclusion sur le comportement effectif.

**Environnement de cette passe :** navigateur intégré à Codex, viewport desktop **1280 × 720**, émulation de largeur mobile **390 × 844**. Les observations Chrome du 11 octobre sont conservées dans l’audit initial. L’émulation de largeur n’émule pas complètement Safari iOS, le pointeur tactile, la barre d’adresse dynamique ou la détection d’appareil. Les branches dépendant de l’appareil sont donc marquées C, pas O sur téléphone réel.

**46 routes anglaises inventoriées :** accueil, catalogue, contact, recrutement, 38 fiches projets et 4 pages institutionnelles. Les 38 fiches ont été ouvertes dans le navigateur, leur séquence CMS et leurs blocs DOM ont été relevés, puis le défilement vers le bas de page a été exercé. Cela ne signifie pas que les **133 vidéos** de ces fiches ont été intégralement visionnées ni que chaque état de chaque média a été testé. Les lectures, menus, filtres, sélecteurs et retours ont été exercés sur les gabarits et les cas explicitement cités.

Les variantes allemande et japonaise sont identifiées dans la navigation et dans les styles conditionnels. Leur contenu complet, leurs coupures typographiques et toutes leurs routes ne sont pas audités. Les sites sociaux, Greenhouse, les sites des partenaires et les autres destinations externes ne font pas partie des 46 routes.

### Pièces de contrôle

- [Annexe page par page : ordre de tous les modules](AUDIT-LANDOR-PAGES.md).
- [Mesures des 42 pages projet/institutionnelles](audit-scroll/releves-pages.json).
- [Sept positions de scroll de l’accueil desktop](audit-scroll/accueil-desktop.json).
- [État d’arrivée du hero mobile](audit-scroll/accueil-mobile.json).
- [Capture de l’accueil](audit-scroll/accueil-desktop-depart.png), [transition projets/manifeste](audit-scroll/scroll-4.png), [hero mobile](audit-scroll/hero-mobile.png).

Les hauteurs relevées sont des instantanés : chargement des polices, médias, variantes de langue, dimensions du viewport et recalcul des pins peuvent les modifier. Elles constituent des points de comparaison, pas des hauteurs à coder en dur. Une matrice `matrix(1,0,0,1,0,720)` indique une translation de 720 px ; elle n’indique pas une durée.

## 2. Corrections essentielles de l’audit précédent

| Sujet | Conclusion vérifiée de cette passe |
|---|---|
| Mouvement global | Ce n’est pas une succession de simples apparitions. Le hero, le panneau blanc, la vidéo, le panneau supérieur et le bloc bleu sont des calques coordonnés. |
| En-tête | Sa visibilité dépend du sens du scroll, et pas uniquement de la sortie du logo géant du viewport. |
| Carrousel | Image fixe : progression sur **6 s**. Vidéo : progression proportionnelle au temps média, puis slide suivante à `ended`. Transition Swiper **600 ms**, effet fade. |
| Légendes du carrousel | Composant effectivement rendu : **CSCard**, titre **18 px**, description **30 px** à 1280 px. Les règles de 36 px d’un autre composant ne doivent pas être prises pour la valeur active. |
| Cas suivant | Le CMS fournit `caseStudyDetailFooter` et `nextItem`, mais le répartiteur de composants consulté ne rend pas ce type. Sur Milan, **aucun lien Topo Chico n’est présent dans le DOM**. Ne pas ajouter « Up Next » en prétendant reproduire l’état observé. |
| Texte découpé | Des règles `.line .word` existent. Le texte de Milan observé ne contient **aucun `.word`** ; la classe d’entrée s’active mais ne suffit pas à prouver une révélation mot par mot. |
| Expertises | Trois cartes sur un bleu légèrement différent, avec scale et opacité, et non seulement trois colonnes de texte brut. |
| Contact mobile | La carte Google est **masquée à ≤767 px** ; les studios deviennent des cartes repliées/dépliées. |
| Durée des cartes expertise | `transition-duration:1` sans unité est invalide. Le style calculé conserve **0.4 s**, avec délais **0 / 0.3 / 0.45 s**. Ne pas interpréter ce `1` comme une seconde. |

## 3. Architecture technique observable

**C :** application React/Next.js, routage par chemins et locale ; données de page intégrées dans `script#__NEXT_DATA__`. Composants stylés avec CSS Modules. GSAP + ScrollTrigger + ScrollToPlugin pour les pins, certaines parallaxes, curseurs et scrolls programmatiques. Hooks de motion pour les progressions liées aux éléments et les révélations à l’intersection. Swiper pour le carrousel. Google Maps pour les studios. React Select et validation de formulaire côté client. OneTrust pour le consentement.

Ne pas déduire de cette liste des versions, un hébergeur, un framework backend, des garanties de SEO ou des performances. Le code public révèle les composants livrés, pas le système de publication complet.

**Composition de l’accueil :**

1. `HomeComp_top` : surface blanche, z-index 1, overflow hidden, coins inférieurs arrondis, ombre portée importante.
2. À l’intérieur : hero et showreel, puis carrousel.
3. `HomeComp_bottom` : bloc bleu, remonté par `margin-top:-100vh`, épinglé sur une distance de scroll d’un viewport.
4. Footer : gradient vers le beige, CTA et liens.

L’ombre de `HomeComp_top` est **0 6vw 6vw 0 rgba(0,0,0,.6)** en desktop. Le panneau blanc masque donc une partie du manifeste placé derrière, puis le révèle en remontant. Réduire cette interaction à une marge négative entre deux sections statiques change radicalement le rendu.

## 4. Fondations graphiques et responsive

### Palette et typographie

| Token | Valeur C | Usage |
|---|---|---|
| Bleu principal | `#0e1adf` | Fonds, titres, contrôles |
| Bleu cartes expertise | `#2831d9` | Surfaces légèrement détachées du fond |
| Jaune | `#ecfd01` | CTA du footer |
| Gris chaud | `#f2f0ec` | Cartes de recrutement, sélection studio |
| Beige desktop | `#dbd1c9` | Footer |
| Beige mobile | `#d9d1c7` | Footer |
| Police | Landor Sans Beta 400 / 700 | Texte, titres, interface |
| Logo | SVG de marque | Dessin sérif, indépendant de la police de texte |

Police en WOFF2, `font-display:swap`. Un changement de famille modifie les largeurs de lignes, donc les hauteurs de sections et les seuils des animations. Pour ECOSPHEARE, la métrique de la police autorisée doit être calibrée avant les timings liés à la géométrie.

| Composant | Desktop | Petit écran |
|---|---|---|
| H1/H2 usuels | 48 px, poids 400 | 24 px à ≤599 px |
| Titre hero | 48 px / 1.05 | 24 px / 1.05 |
| Manifeste | `min(144px,10vw)`, 700, line-height .9, tracking −.3vw | `max(42 px,11.2vw)`, tracking −1.26 px |
| Chiffres sur carte | `min(144px,10vw)`, 700, .9 | `max(40px,11.1vw)` |
| Intro de fiche | `min(54px,max(40px,3.75vw))` / 1.05 | 36 px observés à 390 px |
| Légende carrousel active | 18 px / ~30 px ; description 30 px / 30 px | 15 px / 24 px ; description 18 px / 24 px |

À **≥1920 px**, de nombreuses règles passent à une échelle en vw, par exemple 48 px → 2.5vw, rayons 12 px → .625vw. Ne pas appliquer un seul `clamp()` uniforme à l’ensemble du site.

### Points de rupture

- **599 px** : nombreuses réductions typographiques, médias portrait, rayons/paddings spécifiques, légendes du carrousel hors image.
- **767 px** : catalogue en une colonne, carte de contact masquée, plusieurs compositions et textes passent en flux vertical ; vidéo mobile du showreel sélectionnée selon cette largeur ou une branche appareil.
- **1023 px** : navigation mobile et branche de cascade du recrutement sur deux index.
- **1440 px** : coefficient du calcul de sortie du logo passe de .189 à .19123.
- **1920 px** : mise à l’échelle des dimensions en vw.
- **Orientation portrait + largeur ≤767 px** : sélection de la vidéo de fond mobile du hero.

### Grille

Conteneur média : 12 px de marge interne latérale desktop, 16 px à ≤599 px. Catalogue : deux colonnes `calc(50% - 6px)` avec 12 px entre colonnes ; une colonne à ≤767 px. Les textes disposent de marges internes propres, généralement supérieures à celles des médias. Images de cas : radius 12 px desktop ; certaines images de détail passent à **16 px** sur petit écran, alors que le hero/showreel utilise 8 px. Les rayons ne sont pas tous identiques.

## 5. Contrat de scroll — accueil

### H01 — Fond vidéo et signature

**C/O :** vidéo muette, autoplay, boucle, `playsInline`, `object-fit:cover`, centrée ; hero `position:fixed; top:0; height:100vh; min-height:45vw`. Le logo remplit la largeur disponible, avec padding 32 px desktop et 40 px 15 px mobile. La vidéo de fond est choisie parmi une liste ; son index est conservé en session, séparément pour desktop et mobile. Un rechargement n’impose donc pas un nouveau tirage.

Le fond devient visible après `loadedmetadata`, avec un délai d’état de **500 ms**, puis un fondu CSS **1 s linéaire**. Quand le placeholder du hero sort de la zone observée, classe `notInView` et passage du hero de `fixed` à `absolute`. Ce changement évite de conserver ce calque fixe pendant toute la page.

**M mobile :** fond `sea_1.mp4`, durée média 10 s, lecture muette active. Il s’agit d’une variante effectivement sélectionnée, pas de la durée de toutes les vidéos de fond.

### H02 — Introduction automatique

**C :** après disponibilité des métadonnées du fond, timeout **4 000 ms**, puis tween du scroll pendant **1.5 s** vers la hauteur du bloc titre. Branche appareil : ajout de 100 px et comportement `autoKill` différent. Un `touchstart` tue le tween. Le scroll manuel est surveillé avec debounce **200 ms** ; au-delà d’un tiers de la hauteur du titre, un drapeau empêche l’introduction automatique.

**M :** sans intervention, arrivée à `scrollY=176.5` sur desktop et `138.5` dans l’émulation mobile lors des visites relevées. Ce sont des résultats de cette composition et de cet environnement, pas deux constantes du site.

**Reproduction :** l’origine du délai est l’événement média, pas nécessairement `DOMContentLoaded`. Il faut distinguer arrivée froide, retour historique, arrivée avec scroll conservé et intervention de l’utilisateur. La courbe d’easing est appelée via un alias du module GSAP ; ne pas lui donner un nom non résolu.

### H03 — Agrandissement du panneau blanc

Soit `p` la progression du **début du contenu** depuis le bas jusqu’en haut du viewport : offsets `start end → start start`.

- Boîte : `scale = mapClamp(p, 0…0.5, .93…1)` ; origine **top center**.
- Fond blanc interne, hauteur **200 %** : `scale = mapClamp(p, .5….7, 1…1.05)` ; origine top center.
- La seconde échelle permet au blanc de dépasser les bords et de supprimer les fentes pendant la transition.
- Boîte : radius 12 px, padding-bottom 20 px desktop ; 8 px et 2 px petit écran.
- Titre : padding **46px 32 px 43px**, centré, bleu ; petit écran **24px 8px**.

**M à 1280 × 720 :** `scrollY=180` → boîte à `y=540`, scale **.965**. À `scrollY=648` → `y=72`, scale **1**. Une simple section blanche avec largeur fixe ne reproduit pas cette phase.

### H04 — Sortie verticale du hero

Avec `W=innerWidth`, `H=innerHeight` :

- `a = W > 599 ? max(68, .035×W) : 82`.
- `b = W > 1440 ? .19123 : .189`.
- `k = W×b + a`.
- Sur la progression `p` ci-dessus, domaine `(H−k)/H … 1`, translation `0 % … −101×k/H %` de la hauteur de l’élément.

**I :** à 1280 × 720, `k=309.92` ; déplacement terminal d’environ **−313.02 px** pour un hero de 720 px, confirmé par la matrice relevée. C’est une transformation liée à la progression du scroll, non une animation de 313 ms.

Quand le header revient, le logo interne prend une marge haute de 68 px desktop /77 px mobile, transition **300 ms ease-in-out**. Ne pas confondre cette compensation locale avec la translation de tout le hero.

### H05 — Scale et parallaxe du showreel

Deux progressions distinctes :

- Vidéo : offsets `start end → end end`, scale **.9 → 1** entre progression 0 et .7 ; borne finale **1.001** sur la branche mobile portrait.
- Aperçu interne : offsets du contenu `start end → end start`, translation par paliers **−20 % → 0 % → 0 % → +15 %** aux progressions **0 / .4 / .6 / 1**.
- À ≤599 px : translation interne désactivée, valeur 0.

Cadre desktop `height:min(64vw,90vh)`. Mobile `height:min(135vw,72vh)`. Aperçu dimensionné par padding ; ne pas confondre le pourcentage relatif à la largeur du parent avec une unité vw. Overflow masqué, coins arrondis, média cover.

### H06 — Lecture du showreel

**Machine à états :** `preview-visible → playing-audible → paused → resumed` ; sortie de visibilité → pause et réinitialisation des drapeaux.

- Seuil de visibilité pour l’aperçu de l’accueil : **60 %** de l’élément observé. En entrée, lecture muette ; en sortie, pause.
- Clic Play : désactive `muted`, repart à zéro si ce n’est pas une reprise, démarre le média.
- ScrollTo : **600 ms**, `power1.inOut`, centre le lecteur via `(viewportHeight−videoRect.height)/2`.
- État lecture : padding-top **56.25 %**, transition **500 ms ease-in-out**, délai **600 ms** ; fondu au chargement **800 ms**.
- Bouton Pause : visible immédiatement, maintien **2 s**, disparition **500 ms** via `autoAlpha`.
- Le conteneur de clic Pause persiste même si le bouton visuel est effacé. Dans l’émulation mobile, le nom accessible « Pause » a disparu après le fondu alors que la vidéo continuait. C’est un point d’accessibilité réel à traiter dans ECOSPHEARE.
- Branche appareil : tentative de fullscreen, `playsInline` désactivé ; comportement sur iPhone réel NV.
- La progression de lecture est calculée à partir de `currentTime/duration`. Le code de seek existe, mais le wrapper de progression du hero est `display:none` dans le CSS observé. Ne pas présenter une barre de seek comme toujours visible.

**O/M :** clic Play testé à 390 px : média non muet, `paused=false`, temps reparti proche de zéro. Durée du showreel sélectionné **80.276 s**. Le son est autorisé par l’action de clic ; aucune lecture sonore automatique au chargement n’est spécifiée.

### H07 — Carrousel des projets

Swiper : **1 slide**, loop, effet **fade**, vitesse **600 ms**. Pagination non cliquable dans la configuration (`clickable:false`). Sept projets dans la source de l’accueil relevé.

- Slide image : tween GSAP de `--progress-width` de 0 à100 %, **6 s linéaires**, puis `slideNext()`.
- Slide vidéo : `play()` à l’activation ; `pause()` et `currentTime=0` à la désactivation. Progression pilotée par le temps du média avec tween **100 ms**. Fin de vidéo → slide suivante.
- La durée totale d’un cycle dépend donc de la durée des films, pas de `7×6 s`.
- Chaque slide : trois zones de capture desktop, chacune **33.33 %** : précédent / ouvrir le cas / suivant. Le lien central est une navigation, pas le bouton suivant.
- Branche appareil mobile : zones latérales cachées, zone d’ouverture portée à100 %. Ne pas supposer cette branche à partir de la seule largeur du viewport.
- Titre : translation verticale **100 % → 0**, **300 ms ease-out**, délai **100 ms**. Description : même translation, délai **200 ms**. Les enveloppes masquent le texte par overflow hidden.
- Desktop : titre et description superposés au bas du média, padding **32 px 32 px 47px**. Couleur par projet : bleu, blanc ou noir.
- ≤599 px : légende desktop cachée, légende mobile rendue **sous** le média dans le flux blanc, padding16 px, lien vers la fiche.
- Segments : 4 px desktop /2 px mobile ; espacements5/2 px ; blanc semi-transparent pour la piste.

**Curseur custom C :** dans les zones latérales non tactiles, curseur natif masqué ; un calque suit la souris avec tween **200 ms**, un autre suit sans interpolation (`duration:0`), disparition **300 ms** au mouseleave. Pas de preuve d’un curseur personnalisé global sur toutes les pages. La lecture du code ne montre pas, dans ce composant, la même politique pause-au-focus/pause-hors-écran que celle ajoutée actuellement à ECOSPHEARE.

### H08 — Panneau supérieur et pin du bloc bleu

`HomeComp_bottom` remonte de **100vh** derrière le panneau blanc. ScrollTrigger : `start:'top top'`, `end:'+=100%'`, `pin:true`. La distance supplémentaire est liée à la hauteur du scroller. À 720 px de viewport, le pin réserve **720 px**. `refresh()` est demandé après100 ms ; un recalcul est aussi prévu au resize avec debounce100 ms.

| ScrollY mesuré | Bloc bleu | Conséquence visuelle |
|---:|---|---|
| 1224 | relatif, haut394.8 px | Le manifeste est encore derrière les projets |
| 1872 | fixed, haut≈0 px | Le panneau supérieur glisse devant le bloc épinglé |
| 2448 | relatif, translation+720 px | Pin terminé, le bloc reprend le flux |
| 3060 | relatif, haut−721.2 px | Lecture des expertises puis du réseau |

Ces positions sont liées à cette page de référence à 1280 ×720. L’ajout de sections ECOSPHEARE doit conserver les relations entre triggers, pas réutiliser ces scrollY absolus.

### H09 — Manifeste, cartes expertise et réseau

- Manifeste : translation vers **−20 %** de sa propre hauteur. Trigger : liste de cartes ; `start:'bottom top'`, `end:'+=200%'`, `scrub:.1`, `refreshPriority:1`.
- Cartes : toggle actif sur trigger liste, `start:'20%'`, `end:'+=200%'`. Classe `inView` attachée à `isActive` ; effet réversible, pas un `once:true`.
- Cartes initiales : opacité0, scale.8. Finales : opacité1, scale1. Transition calculée400 ms ease-in-out ; delays0/300/450 ms.
- Géométrie : largeur `calc(33.33% - 8px)`, padding36 px, radius12 px, fond#2831d9 ; empilement mobile, padding24 px, radius8 px.
- Chiffres du réseau : translation vers **−37 %**, trigger section about, `start:'top center'`, `end:'+=250%'`, `scrub:.1`, priorité1. Un offset initial CSS `translateY(3.6vw)` existe en desktop ; le point final dépend de cette valeur et de la hauteur du texte.
- `scrub:.1` désigne le rattrapage de la progression ; **ce n’est pas la durée totale de l’effet**. Les tweens observés ne déclarent pas tous explicitement un easing. Ne pas supposer un mapping linéaire sans contrôler le défaut GSAP applicable.
- Carte pointillée : image, non globe3D interactif. Logos partenaires : liens. Les chiffres ne sont pas des compteurs animés démontrés.

### H10 — Footer

Le changement de couleur vient d’un gradient de fond, pas d’un morphing vidéo ni d’un tween color lié au scroll prouvé. Gradient desktop : transparent jusqu’à 14.42 %, beige à 61.34 %, beige jusqu’à 86.44 %. Variante mobile : beige atteint à 44.72 %.

Padding supérieur245 px desktop /140 px mobile. Pilules jaunes ; distance16 px. Réseaux soulignés, marge haute44/24 px. Illustration du bateau max225 px desktop /40 % mobile. Mentions en trois zones desktop, recomposées mobile. Aucune animation du bateau n’a été démontrée.

## 6. En-tête, menus et composants transversaux

### N01 — En-tête directionnel

En-tête fixe transparent, barre intérieure blanche. Barre cachée via `top:-68px` desktop, `-77px` mobile ; visible via `top:0`. Transition **250 ms ease-in-out** de la barre ; conteneur **400 ms**. Ombre visible : `0 8px 10px 8px rgba(14,26,223,.4)`.

État directionnel : comparer scrollY précédent et courant. Remontée → `m=true`, descente → `m=false`. Drapeau de profondeur `d` lorsque `scrollY/innerHeight > .1`.

- Accueil : barre affichée à la remontée ; elle peut être absente au premier écran et pendant la descente.
- Pages intérieures : visible près du haut et lors de la remontée ; cachée pendant la descente au-delà du seuil.
- Lecture média : état global permettant de forcer son masquage.
- Menu ou panneau de langue mobile ouvert : barre maintenue visible, ombre supprimée.
- Branche tactile : `touchmove` + scroll debounced100 ms ; desktop : listener scroll direct.
- Le panneau de langue desktop se ferme au scroll.

**O :** remontée de 86.5 px après descente sur l’accueil → classe `Header_scrolled` et retour de la barre. La reconstruction actuelle ECOSPHEARE utilise un IntersectionObserver sur le logo : ce n’est pas la même logique.

### N02 — Menu mobile

À ≤1023 px : hamburger gauche, logo central, globe droite. Panneau blanc fixé, `top:-100vh → 0`, **500 ms cubic-bezier(.23,0,.22,1)**. Menu non plein écran : à 390 ×844, hauteur finale mesurée **298.7 px** pour les trois liens. Le contenu de la page reste visible dessous. Liens centrés, taille `min(60px,8.53vw)`, line-height1.5. Fermeture par croix observée. Menu et langues ont deux panneaux distincts.

**O/M :** ouverture et fermeture testées ; panneau final y=0. Absence d’attribut `aria-expanded` sur les boutons d’en-tête inspectés. L’état initial de la transition peut montrer un y négatif : ne pas relever une frame intermédiaire comme position finale. Escape, focus-trap et inert du contenu sous le menu NV.

### N03 — Langues

Desktop : panneau blanc ancré en haut à droite, largeur190 px, radius18.5 px, ombre0 0 9px rgba(0,0,0,.25), trois liens avec marqueur de langue active. Navigation par locale en conservant le chemin. Mobile : panneau déroulant dédié, hauteur dépendante de son contenu, mesurée364.5 px dans la session. Les traductions ne sont pas simplement un remplacement de texte : des règles CSS `html[lang=ja]` changent les tailles et interlignes.

### N04 — Pilules et liens

Bouton courant : 30 px, line-height1, padding14px 36px 11px, rayon300 px. ≤767 :24 px et10px 24px 7px ; ≤599 :18 px et9px 16px 7px. Certaines flèches élargissent le bouton au survol : max-width0→32 px, marge gauche0→15 px, marge droite0→−5 px ; **300 ms**. La flèche du titre de carrousel possède des valeurs différentes :18 px,12 px,−4 px desktop.

### N05 — Cookies

Bannière OneTrust relevée lors de la première passe ; bouton Cookie Settings testé sur mobile dans cette passe. Il ouvre un **dialogue** de préférences, avec bouton Fermer, catégories dépliables, switches, refus global, autorisation globale et confirmation de sélection. Catégorie strictement nécessaire toujours active. La langue du centre était française malgré la page anglaise ; elle dépend de la configuration/localisation du service, pas seulement du chemin de page.

Aucun switch n’a été activé, aucune nouvelle autorisation n’a été enregistrée. Les requêtes réellement bloquées par chaque catégorie, la persistance inter-session et la conformité juridique ne sont pas certifiées par ce test visuel.

## 7. Catalogue — `/en/our-work/`

Titre bleu centré, introduction centrée, puis grille. Padding haut128 px desktop /113 px mobile ; titre max810 px ; titre→description32/18 px ; description→grille48/24 px. Pas de filtres affichés : `showFilters:false`, confirmé par l’absence de boutons de filtre dans le DOM mobile.

**Révélation C :** chaque carte observe son intersection. État caché opacity0, y10 px ; état visible opacity1, y0, **300 ms easeOut**. L’état repart vers hidden lorsque la carte sort, contrairement à une révélation unique. Image : fondu au chargement800 ms ; zoom de survol1.05 avec transition200 ms.

**Nuance :** le code comporte des handlers vidéo de hover utilisant une ref, mais le rendu de la carte catalogue inspectée ne crée que des images. Ne pas promettre une preview vidéo sur toutes les cartes en se fondant sur ces handlers seuls.

Desktop deux colonnes ; mobile une. Ratio visuel desktop3:2, variante mobile portrait, hauteur plafonnée par viewport selon la règle `min(150%,80vh)`. Images desktop et mobile sont des ressources distinctes dans de nombreux cas. Une simple image paysage recadrée ne suffit pas pour reproduire la variante mobile.

**Retour catalogue C :** sauvegarde du scroll en sortie (`cs-scrollTop`) ; restauration conditionnelle selon la section précédente. Cela doit être intégré à la navigation de fiche, pas remplacé par un retour systématique en haut. Le clic vers Reykjavik puis le bouton X ont été exercés à partir d’une position1688 px en mobile ; **résultat observé : retour à scrollY=0**, et non à 1688 px. La présence du code de restauration ne garantit donc pas ce parcours ; son interaction avec le routage doit être réexaminée avant de déclarer cette fonctionnalité conforme.

## 8. Fiches projets — moteur commun et variantes

La séquence exacte de chacune des38 fiches est fournie dans l’annexe. Ne pas construire38pages avec un simple remplacement de titre et une série uniforme d’images : certaines contiennent onze vidéos, d’autres des diptyques/triptyques et des récits très longs.

### P01 — Ordre de rendu réel

Le routeur détecte le type `caseStudyDetailFooter` pour reconnaître une fiche. Il extrait le hero et le rend **avant** les autres modules, même si le tableau CMS commence par breadcrumb et header. Le breadcrumb est une surcouche fixe. `caseStudyDetailHeader` et `caseStudyDetailFooter` sont présents dans les données mais ne sont pas des sections visibles automatiquement rendues par le répartiteur consulté.

Ordre pratique : **hero plein écran → introduction → médias ordonnés → récit/équipe si renseignée → footer global**. Le breadcrumb reste au-dessus. Données `nextItem` documentées comme données inactives, sans ajout automatique d’un « prochain cas ».

### P02 — Hero épinglé

Hauteur100vh, image cover centrée, variante mobile, fondu de chargement **700 ms linéaire**. ScrollTrigger `start:'top top'`, `end:'+=100%'`, `pin:background`, `scrub:0`, `anticipatePin:1`. Tween `y:'-=30%'`, easing `power1.in`.

**M SCANA desktop :** à scrollY468, fond en positionfixed, translation−91.26 px. Avec p=468/720=.65, easing quadratique, −.30×720×p²=−91.26. Cette correspondance confirme le comportement mesuré. Le contenu blanc suivant recouvre progressivement le hero.

### P03 — Breadcrumb extensible et retour

Surcouche positionfixed, z-index juste inférieur au header ; `pointer-events:none` sur le conteneur, réactivés sur les cibles. Si le header est affiché, marge haute68/77 px, transition400 ms. Padding25px 12 px desktop /25px 16px mobile.

Pilule gauche : montre d’abord le dernier item. `ResizeObserver` calcule la largeur du dernier libellé et celle de toute la liste. Au hover, `max-width` passe de `--last-width` à `--max-width` en **300 ms**, révélant les ancêtres. Les éléments flottent vers la droite dans une liste en nowrap. Dernier lien `pointer-events:none`. Ne pas remplacer cette interaction par une pilule statique sans breadcrumb si la fidélité est requise.

Croix droite : lien vers le parent catalogue, pas modal-close. Diamètre `max(48px,4.027vw)` desktop ; **35 px mobile**. Icône30/20 px. Son nom accessible observé est un caractère d’icône, pas un libellé explicite : amélioration nécessaire côté ECOSPHEARE.

### P04 — Introduction

Fond blanc, padding vertical48 px desktop /36 px mobile ; contenu latéral56/24 px. Taille desktop basée sur la largeur, maximum54 px ; mobile36 px. Texte aligné gauche, très grand, pas un paragraphe étroit centré.

Intersection30 %, `once:true`, classe d’animation. Les règles CSS pour mots découpés existent mais aucun mot découpé dans Milan observé : ne pas programmer un stagger par mot en le présentant comme observé. Le contenu texte doit rester accessible sans découpage artificiel.

### P05 — Image simple, double et triple

- Image simple : pleine largeur du conteneur, padding vertical6 px desktop /3 px petit écran ; fade opacity0→1 à`load`, **800 ms**. Ce fondu n’est pas un scrub de scroll.
- Diptyque : deux colonnes50 % moins6 px ; mobile empilement, écart16 px.
- Triptyque : deux colonnes ; une grande image d’un côté, deux empilées de l’autre. Minimum de hauteur59.7vw sur les colonnes desktop, écart12 px entre les deux petites images. Variante mirrored : les deux premières images sont à gauche, la troisième à droite.
- Mobile : flux vertical, images heightauto, les proportions naturelles reprennent la main. L’ordre suit les colonnes du composant, pas un placement absolu libre.
- Les ratios intrinsèques de chaque média sont listés dans l’annexe de données. Le `cover` peut recadrer ; conserver le cadrage demande également de comparer les visuels finaux.

### P06 — Vidéo de détail

Lecteur interne avec poster, boucle, bouton Play, pause par couche cliquable, son au lancement explicite, recentrage600 ms et maintien/fondu du contrôle comme le showreel. **Différence essentielle :** la visibilité60 % ne déclenche pas automatiquement la lecture de cette vidéo de détail dans le code consulté ; elle déclenche la pause à la sortie. Ne pas appliquer l’autoplay muet du hero à toutes les vidéos de toutes les fiches.

Barre de progression : logique de seek calculée à partir de la position horizontale du clic et de la durée du média. L’accessibilité au clavier et les éventuels sous-titres de chaque film n’ont pas été testés. Les 133 vidéos ne partagent pas nécessairement la même durée, le même ratio ou la même bande sonore.

### P07 — Récit / équipe

Section blanche, padding56px 0 60px. Texte principal et éventuelle équipe en deux colonnes, espacement11.5vw, marges internes56 px. Mode sans équipe : récit centré, largeur42.5vw avec min-width600 px desktop. En mobile : largeur100 %, empilement ; éventuelle équipe après un grand intervalle. Titre THE STORY bleu18 px ; contenu éditorial indépendant des légendes média. Le grand récit n’est pas une image de texte.

## 9. Contact — `/en/contact-us/`

### C01 — Liste et carte

Intro centrée, puis deux régions. **M à 1280 :** colonne liste398.08 px, carte845.92 px, hauteur561 px ; écart12 px. **C :** liste32 %, min-width325 px ; carte68 % ; hauteur`max(561px,38.95vw)`. La liste a son scroll interne, distinct du scroll de page.

Recherche au changement de saisie : comparaison insensible à la casse sur le nom de studio, pas moteur de géocodage libre. Premier résultat sélectionné. Sélection de studio → scroll interne **800 ms**, délai **100 ms**, et nouvelle position de carte. Recherche « Paris » → un studio visible ; « zzzz » → zéro résultat visible, testé. Le code prévoit un centre par défaut en absence de résultat.

L’heure locale est réévaluée par intervalle **1 000 ms**, via timezone. La carte est Google Maps, avec marqueurs et commandes. Les31 studios des données ne justifient pas l’invention de31bureaux ECOSPHEARE.

### C02 — Mobile

À≤767 px, carte `display:none`, colonne liste100 %. Cartes au repos : max-height`max(58px,6.66vw)`, overflowhidden ; sélection : max-height400 px, fondgris chaud ; transition **400 ms ease-out**. **M à 390 :** cartes non sélectionnées58 px, Paris sélectionné208.66 px ; recherche London affichant la carte dépliée testée. Le nombre de lignes d’adresse détermine la hauteur réelle, pas le max-height.

### C03 — Formulaire

Conteneur max896 px desktop ; padding24 px mobile. Champs à soulignement, labels et zone de message, puis cases et bouton. Champs : prénom, nom, email, entreprise facultative, fonction facultative, pays facultatif, type de demande, studio, message, accord de traitement, newsletter facultative, contrôle antirobot.

Sélecteurs React Select, avec input de recherche et navigation clavier. Type de demande ouvert : **Other / Work with us / Join us** ; fermeture Escape testée. Le libellé ARIA d’assistance indique les touchesfléchées, Enter, Escape etTab. Pas de soumission effectuée.

Le DOM ne porte pas `required=true` sur les champs inspectés ; l’obligation est gérée par la validation JavaScript enregistrée. Ce constat ne signifie pas que tous les champs sont facultatifs. Erreurs configurées avec `role=alert`, overlayloading et messages succès/échec présents dans le code ; résultats serveur NV. Aucun CAPTCHA ou accord n’a été validé.

## 10. Recrutement — `/en/join-us/`

Titre centré, catégories en ligne sur desktop, grille de cartes. **O/M :**61 offres initiales ; Creative →24 offres. Pas de navigation externe nécessaire au filtrage. Sélection active plus opaque et soulignée.

Révélation d’une carte : opacity0→1, scale.7→1, **700 ms easeOut**. Desktop délai `(index % 3)×150 ms`; branche≤1023 délai`(index % 2)×150 ms`. L’intersection peut réinitialiser hidden à la sortie ; il ne s’agit pas d’un stagger global jouant une fois au chargement.

Carte gris chaud#f2f0ec, radius16 px desktop/8 px mobile, padding35px 1.0416vw. Ville bleue24/18 px. Intitulé uppercase gras, taille`max(32 px,2.95vw)`, hauteur du bloc`max(175px,18.26vw)`. Discipline24/18 px. Une colonne observée à 390 px. Filtres mobiles via bouton compact et liste déroulante. Les liens de poste mènent vers Greenhouse ; parcours candidature externe NV.

Pour ECOSPHEARE, ce gabarit n’est utile que si une vraie rubrique recrutement existe. Il peut inspirer une page d’expertises, mais cette adaptation doit être annoncée comme telle.

## 11. Pages institutionnelles

Les quatre routes ont été ouvertes et parcourues vers leur bas de page. Elles utilisent le type `staticPage`, non le gabarit de projet :

| Route | Composition / différence |
|---|---|
| `/en/privacy-policy/` | Document long, titre48 px, corps éditorial, liens/ancres selon contenu |
| `/en/cookie-policy/` | Document et intégration de liste de cookies gérée par la branche OneTrust |
| `/en/modern-slavery-act/` | Contenu institutionnel statique, footer commun |
| `/en/terms-of-use/` | Conditions d’usage statiques, footer commun |

Padding haut128 px desktop /127 px petit écran. Titre bleu centré, largeurmax810 px. Le gabarit prévoit une colonne gauche **sticky** de36 % (`top:calc(3.54166vw + 60px)`) et une colonne droite64 %. Sur≤767 px : colonnes100 %, gauche relative, intervalle40 px ; ≤599 intervalle20 px. La présence effective d’un sommaire dépend des données de la page ; ne pas en inventer un si la colonne est vide.

Le scroll de ces pages n’a pas le pinning du hero de projet : navigation directionnelle et éventuelle colonne sticky suffisent. Aucun effet de transformation n’est démontré pour chaque paragraphe juridique.

## 12. Ce que signifie « reproduire à l’exactitude »

L’équivalence doit être évaluée par **gabarit × viewport × état × progression**, pas par une seule capture du haut de page. Les visuels LANDOR, son logo, sa police et ses textes sont des ressources de marque ; cette spécification n’accorde pas de droits sur ces fichiers. La reconstruction ECOSPHEARE doit utiliser ses ressources autorisées. Son nom et son copywriting modifient les métriques : l’objectif mesurable est la fidélité de composition et de comportement, avec calibration des coupures et des espacements.

### Écarts prioritaires du site ECOSPHEARE actuel

| Priorité | Écart constaté dans le code local | Travail requis |
|---|---|---|
| P0 | Header activé à la sortie du logo | Remplacer par l’automate direction/profondeur et l’override média/menu |
| P0 | Hero animé par média + dérive CSS, panneau à recouvrement statique | Implémenter les trois progressions H03/H04/H05 séparément |
| P0 | Bloc bleu dans le flux, sans équivalent du pin LANDOR | Reconstituer HomeComp_top/bottom, stacking, ombre et pin d’un viewport |
| P0 | Carousel local à6 500 ms pour toutes les slides | Distinguer6 s pour une image et durée de la vidéo, fade de 600 ms, découpes de légendes |
| P0 | Fiches actuelles simplifiées | Ajouter hero épinglé, breadcrumb extensible, médias simples/doubles/triples et récit adapté |
| P1 | Menu local affiché/masqué immédiatement | Ajouter glissement500 ms avec état de sortie géré, garder le focus accessible |
| P1 | Showreel local avec contrôles natifs | Calibrer recadrage/recentrage et contrôles ; préserver une pause visible et nommée |
| P1 | Échelle et famille de caractères différentes | Recaler métriques, tracking, largeur utile et nombre de lignes à chaque breakpoint |
| P1 | Expertises sans cascade équivalente | Ajouter le toggle scale/opacité et les délais vérifiés |
| P2 | Retour catalogue sans contrat équivalent documenté | Tester et implémenter la restauration de scroll à la navigation |

### Extensions ECOSPHEARE à insérer sans casser le système

Conserver l’ordre narratif signature → preuve vidéo → projets → expertise → relation → contact. Ajouter **après le noyau épinglé**, dans le flux normal, les sections détaillant SEO, GEO, Google Ads, sites/landing pages, web apps/SaaS/CRM. Éviter d’insérer arbitrairement plusieurs écrans entre le trigger et son élément épinglé : cela modifie la course de scroll et la synchronisation.

Les projets QICS doivent utiliser leurs vrais visuels et préciser le rôle ECOSPHEARE. Les résultats chiffrés ne sont ajoutés qu’avec preuve. La section réseau peut devenir une explication création → visibilité → acquisition → conversion → suivi commercial, en conservant le rythme typographique mais sans chiffres ou bureaux empruntés.

## 13. Contrat d’accessibilité et de mouvement réduit

L’audit est descriptif ; certains comportements LANDOR nécessitent une correction dans la réalisation : contrôles iconographiques sans nom clair, boutons imbriqués ou couches rolebutton, disparition du nom de Pause, cibles35px, animations en boucle et scroll imposé.

Pour ECOSPHEARE :

1. `prefers-reduced-motion:reduce` : supprimer auto-scroll, pinning narratif, parallaxes, scale de lecture et autoplay de carrousel ; présenter les mêmes contenus en flux stable.
2. Garder un poster de fond, ne pas charger la vidéo décorative si le mouvement est réduit.
3. Boutons Pause toujours accessibles au clavier et au lecteur d’écran, avec nom stable ; ne pas faire disparaître la seule commande.
4. Focus visible, retour du focus à la fermeture d’un panneau, Escape, ordre de tabulation cohérent et cible tactile utile≥44px.
5. Aucun contenu essentiel initialement invisible si le JavaScript échoue.
6. Éviter la multiplication de `transition:all` et des lectures/écritures de layout dans le même scroll handler. Mesurer la géométrie au refresh, animer transform/opacity, limiter les listeners.
7. Recalcul des seuils après chargement des polices, changement d’orientation et redimensionnement ; nettoyage des observers, timers et pins à la navigation.

Ces améliorations sont des écarts intentionnels aux défauts de la référence, motivés par le besoin utilisateur de navigation fluide et accessible. Aucune conformité WCAG globale de LANDOR n’est certifiée ici.

## 14. Matrice de recette pour la reconstruction

| Scénario | Contrôle d’acceptation |
|---|---|
| Arrivée froide desktop | Logo, couverture vidéo, délais après métadonnées ; aucune fente entre calques |
| Scroll lent de zéro à un viewport, puis retour | Scale .93→1, fond 1→1.05, translation du hero selon formule ; réversibilité sans saut |
| Scroll rapide vers le manifeste | Pin actif pendant une hauteur de viewport, pas de chevauchement texte/footer |
| Header | Descente masque, remontée révèle, haut de page cohérent ; médias et menus prioritaires |
| Showreel | Prévisualisation muette, clic avec son, recadrage, pause/reprise, sortie du viewport |
| Carrousel image | Progression 6 s puis fade 600 ms ; titre et description décalés de 100/200 ms |
| Carrousel vidéo | Progression média ; reset de l’ancienne vidéo ; transition à ended |
| Catalogue | Deux/une colonnes, entrée 300 ms, cibles cohérentes ; politique de retour explicitement validée |
| Projet | Hero 100vh épinglé et translation, breadcrumb fixe/extensible, X vers le catalogue |
| Diptyque/triptyque | Ordre et proportions desktop/mobile, pas d’étirement ou de recadrage imprévu |
| Contact | Recherche avec un/zéro résultat, sélection, scroll interne ; mobile sans carte |
| Recrutement | Filtre, réinitialisation, cascade par rang, navigation externe identifiée |
| Menu | État fermé, entrée, ouvert, sortie, resize au-dessus de 1023 px |
| Mouvement réduit | Contenu complet en flux ; aucune dépendance au scroll programmatique pour lire |
| Clavier | Tab, Shift+Tab, Enter, Espace, Escape ; focus jamais perdu ni masqué |

**Viewports de recette recommandés, non tous testés dans cette passe :** 390×844, 768×1024, 1024×768, 1280×720, 1440×900, 1920×1080. Tester de part et d’autre des seuils 599/767/1023/1920. Tester Safari iOS et Chrome Android réels pour les unités de viewport et les branches fullscreen/tactile.

**Comparaison visuelle proposée :** aligner les navigateurs au même viewport et à la même progression, neutraliser les différences de temps des vidéos, vérifier les rectangles des composants puis faire une comparaison d’images avec masques sur les visuels remplacés. Tolérance de projet proposée : 2 px sur les contrôles fixes et 1 % sur les grands médias. Ce sont des objectifs de recette, pas des écarts déjà mesurés ni garantis.

## 15. Sources et limites restantes

Référence directe : [LANDOR](https://landor.com/), [Our work](https://landor.com/en/our-work/), [Contact](https://landor.com/en/contact-us/), [Join us](https://landor.com/en/join-us/). Toutes les URL de cas sont liées dans l’annexe.

Sources de code publiques, mêmes noms vérifiés dans les balises chargées le12 octobre : [CSS global](https://landor.com/_next/static/css/383ca74e1c512ba8.css), [CSS composants](https://landor.com/_next/static/css/28c2988b4b6bf818.css), [CSS bibliothèques](https://landor.com/_next/static/css/967e1b21fa99bddd.css), [module composants304](https://landor.com/_next/static/chunks/304-75a0a4b4424b9377.js), [entrée accueil](https://landor.com/_next/static/chunks/pages/index-30c561aeff5cedf0.js). Noms susceptibles de changer lors d’un déploiement. Les copies de recherche restent dans `docs/reference/`, exclues du dépôt.

L’accès HTTP direct automatisé aux fiches a renvoyé 403 ; l’inventaire a été réalisé ensuite par ouverture normale des pages dans le navigateur et lecture de leur DOM/source intégrée, sans contournement de contrôle d’accès.

**Restent NV :** toutes les traductions, toutes les interactions des133 vidéos, erreurs réseau média, soumission du formulaire, backend, CAPTCHA, candidature, requêtes analytiques par consentement, focus-trap de chaque panneau, débit/FPS/LCP/INP/CLS, comportement sur appareils physiques et chaque largeur intermédiaire. Aucun score de performance ni correspondance pixel par pixel de l’ensemble du site n’est revendiqué. L’audit est suffisamment précis pour remplacer les approximations structurelles identifiées ; il ne prouve pas à lui seul qu’une reconstruction est déjà identique.
