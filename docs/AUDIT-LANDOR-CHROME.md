# LANDOR : audit Chrome et transposition ECOSPHEARE

Relevé du 12 octobre 2026. Ce document constitue l'entrée de lecture de la nouvelle passe. Il complète, sans remplacer les preuves antérieures, la [spécification complète des interactions](AUDIT-LANDOR-INTERACTIONS.md) et l'[annexe page par page](AUDIT-LANDOR-PAGES.md).

## Méthode et périmètre réel

Navigation dans Chrome, défilement dans les deux sens, activation du showreel, du sélecteur de langue, du menu mobile, ouverture du catalogue, de SCANA Energy, de Contact et de Join us. Viewports CSS : **1512 × 751** et **390 × 844**. Les contrôles ECOSPHEARE sont réalisés dans le navigateur intégré à **1280 × 720** et **390 × 844**. Une largeur mobile ne constitue pas un test sur un appareil iOS ou Android réel.

**M** = mesure DOM/style calculé ; **O** = interaction ou résultat visuel effectivement observé ; **C** = paramètre déclaré dans le code public, non chronométré ; **I** = interprétation ; **NV** = non vérifié. Les durées CSS ne prouvent ni une cadence de 60 images/seconde ni l'absence de saccades. Un déplacement lié au scroll n'a pas une durée fixe : il dépend du défilement de l'utilisateur.

L'annexe précédente inventorie 46 routes anglaises et détaille 38 fiches projets. Ces 46 routes n'ont **pas toutes été revisitées dans Chrome pendant cette passe**. Les vidéos ne sont pas toutes visionnées intégralement. Les langues allemande et japonaise, les candidatures externes et la livraison réelle d'un formulaire restent hors validation.

Les [relevés JSON de Chrome](audit-chrome/releves.json) consignent catalogue, SCANA, contact, recrutement et menu mobile. Les relevés plus complets de l'accueil, les matrices de scroll, les couleurs, polices et composants sont dans la spécification et `audit-scroll/`.

## 1. Accueil : composition et calques

### Hero, panneau blanc et film

**O :** premier écran immersif bleu animé, marque blanche très large, panneau blanc qui arrive par le bas. Le film et le panneau n'ont pas le comportement d'une simple succession de sections avec fade-in. Ils participent à une composition de calques superposés.

**M, instantané à scrollY 927,5 :** `HomeComp_top` mesure 2426 px de haut ; `Hero_container` 1637 px ; le calque hero mesure 751 px avec une translation Y de −360,711 px. Le contenu mesure 886 px. Le titre mesure 1488 × 190 px, padding 46 / 32 / 43 px. Le fond blanc possède une échelle 1,05. Ces valeurs sont des instantanés dépendants du viewport et du chargement, pas des dimensions fixes universelles.

Le film observé mesure 1488 × 676 px. **M/C :** transition de padding 0,5 s `ease-in-out` et d'opacité 0,8 s. Bouton Play Showreel : environ 161 × 38 px, padding 10 / 20 / 9 px. **O :** activation réussie ; **M :** vidéo non muette, lecture active, durée média 80,276 s, boucle active, contrôles natifs masqués. Le média décoratif distinct dure 10 s ; au moment du relevé il est muet et en pause. L'action de pause du showreel n'a pas abouti dans cette passe : elle n'est donc pas certifiée ici.

### En-tête et langues

**M :** en-tête desktop de 68 px. Transition du conteneur 0,4 s ; barre interne 0,25 s `ease-in-out`. **O :** masquage pendant la descente, retour à la remontée ; ce n'est pas uniquement une détection de sortie du hero. **O :** le globe ouvre les liens EN, 日本語, DE. Les destinations linguistiques complètes ne sont pas parcourues dans cette passe.

### Projets sélectionnés

**O :** images/médias de grande taille, légendes superposées et segments de progression. Les mesures antérieures du composant actif donnent un titre de 18 px et une description de 30 px. **C, relevé antérieur :** fade Swiper de 600 ms ; image fixe pendant 6 s ; vidéo progressant selon son temps média, passage à la suivante à `ended`. Ne pas confondre ces paramètres avec un chronométrage expérimental.

### Passage au manifeste

**O :** le panneau blanc supérieur se retire et découvre une grande composition typographique bleue en dessous. Coins inférieurs arrondis et ombre diffuse accentuent la superposition. Ce comportement demande un empilement contrôlé et un épinglage, pas uniquement un changement de couleur de fond. Les formules et bornes de défilement déclarées sont détaillées dans la spécification complète.

### Mobile

**O à 390 × 844 :** marque presque pleine largeur, média recadré, panneau blanc entrant en bas. Après descente puis remontée, l'en-tête réapparaît. Le menu s'ouvre en surface blanche avec logo centré, fermeture à droite et trois destinations bleues centrées : Our work, Contact us, Join us.

**M :** panneau ouvert haut de 298,695 px ; transition `top 0.5s cubic-bezier(0.23,0,0.22,1)`. Cette valeur est une déclaration calculée, pas une mesure vidéo de la durée perceptible. [Capture du menu](audit-chrome/landor-menu-mobile.png). Les boutons inspectés n'exposaient pas d'attribut `aria-expanded` dans ce prélèvement : cela ne constitue pas à lui seul un audit exhaustif de leur nom accessible.

## 2. Catalogue Our work

Route : `/en/our-work/`. **M :** h1 48 px / 50,4 px de hauteur de ligne. Les quatre premiers visuels mesurent chacun 738 × 491,945 px, soit pratiquement **3:2**. Deux colonnes, 12 px de gouttière et 12 px de marge latérale expliquent exactement la largeur de 1512 px : `12 + 738 + 12 + 738 + 12`.

**O :** ouverture de SCANA depuis la carte du catalogue. Titres et liens distincts des images sont exposés dans le DOM. Les règles de hover, les changements de grille aux breakpoints et l'ordre complet des projets figurent dans la spécification et l'annexe. Le premier écran n'autorise pas à supposer que toutes les images disposent du même cadrage intrinsèque.

## 3. Fiche SCANA Energy et gabarit projet

Route : `/en/our-work/scana-energy/`. **M à scrollY 0 :** hero et fond de 751 px ; fond en position fixed ; matrice de translation initiale nulle. Breadcrumb fixed à top 68 px, zone haute de 111 px. La capsule intérieure mesure 54 px de haut et commence à y=93 px ; le bouton de fermeture mesure 61 px.

**M après défilement à scrollY 488 :** fond toujours fixed, translation Y = −95,1307 px. **I :** mouvement non équivalent à un simple déplacement natif du document ; la couverture blanche qui arrive devant renforce l'effet de profondeur. Une seule paire de mesures ne permet pas de reconstituer une courbe d'interpolation ; la formule déclarée est documentée séparément dans l'audit complet.

L'histoire présente notamment les séquences « Same gas. No spark. », « The real power move », « Soul searching ». Taille de texte relevée : 18 px. La séquence des modules propres à chacune des 38 fiches est consignée dans l'annexe : ne pas extrapoler la composition de SCANA à toutes les autres fiches.

## 4. Contact us

Route : `/en/contact-us/`. Studios, sélection de localisation, carte et formulaire. **O :** sélection de London réalisée. **M :** h1 48 px ; recherche studio 472 × 51 px ; champs prénom, nom, e-mail, entreprise et poste 872 × 74 px ; message 872 × 220 px. Trois contrôles React Select possèdent des inputs internes de 7 px de largeur et de hauteur nulle : ce sont des nœuds techniques, **pas la taille visuelle des sélecteurs**. Cases DOM de 13 × 13 px, distinctes de leur éventuelle surface cliquable globale.

Aucun formulaire soumis, aucun CAPTCHA activé et aucune inscription à la newsletter réalisée. Les états de validation et le comportement mobile antérieurement observés sont dans la spécification. Le succès serveur, les e-mails et les intégrations CRM sont NV.

## 5. Join us

Route : `/en/join-us/`. **M :** h1 48 px. Contrôles exposés : Filter, All, Creative, Client Services, Internship, Landor, BDG, Growth. Les interactions de filtres antérieures sont consignées dans l'audit complet ; leur simple présence lors de cette passe ne prouve pas une nouvelle exécution de tous les filtres. Aucune candidature transmise.

## 6. Pages institutionnelles et autres projets

Consulter l'[annexe détaillée](AUDIT-LANDOR-PAGES.md) pour chaque route, l'ordre des composants, médias, grilles et textes. Consulter la [spécification technique](AUDIT-LANDOR-INTERACTIONS.md) pour les tokens typographiques, couleurs calculées, seuils responsive, états des contrôles, footer, consentement, recrutements, studios, cases et transitions. Ces fichiers font partie intégrante de cet audit ; ils évitent de présenter un seul gabarit comme une description exhaustive de toutes les pages.

## 7. Modifications ECOSPHEARE réalisées

| Système | Réalisation | Écart explicite |
|---|---|---|
| En-tête | Réaction au sens du scroll, transition 250 ms ; maintien au focus clavier/menu | Aucun scroll automatique d'entrée imposé |
| Accueil | Panneau blanc commun au hero, film et projets ; coins bas 18 px, ombre et manifeste bleu sous-jacent | Contenus et symbole ECOSPHEARE originaux |
| Manifeste | Épinglage sur une hauteur de viewport ; texte 9vw desktop, 11vw mobile | Composition typographique adaptée au français |
| Intro et film | Mise à l'échelle liée au scroll, sans durée temporelle fixe | Facteurs propres au site : .965→1 et .9→1 |
| Carrousel | Fondu 600 ms, intervalle 6 s, titres 18 px/descriptions 30 px desktop | Images fixes ; segments actifs sans remplissage chronométré |
| Carrousel mobile | Légendes bleues sous le visuel sur fond blanc ; commandes 44 px | Aucun swipe ajouté, navigation boutons/clavier |
| Catalogue | Deux colonnes, gouttière 12 px, ratio 3:2 desktop, h1 48 px, hover 200 ms | Ratio 4:5 mobile conservé |
| Fiches | Image immersive, pin, translation progressive ; contenu blanc recouvrant ; retour fixe | Fil d'Ariane statique, pas de menu de projets au hover |
| Conversion | Expertises, processus, mesure, FAQ, infographies et collectif conservés | Extensions propres à ECOSPHEARE |
| Mouvement réduit | Pas de pins/parallaxes, pas de fondu ni animation de légende ; header accessible | Repli simple et lisible |

### Implémentation et ressources

`public/scroll-design.js` utilise GSAP/ScrollTrigger avec `gsap.matchMedia`, `scrub`, `pin` et recalcul au chargement des polices/médias. Les interactions classiques et les annonces du carrousel restent dans `app.js`. Les slides inactives sont masquées et rendues inertes ; le passage manuel suspend le défilement automatique. Le focus, le survol, l'onglet caché, la sortie d'écran et la préférence de mouvement réduit suspendent également l'autoplay.

GSAP **3.15.0** provient du paquet déjà présent dans le dépôt local QICS (`node_modules/gsap/dist`). Les en-têtes d'auteur/licence sont conservés dans `public/vendor/`. Voir [licence officielle](https://gsap.com/standard-license/) et [documentation ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/). Cette version locale n'est pas présentée comme celle de LANDOR. Aucune police, texture, vidéo ou photographie propriétaire LANDOR n'est distribuée dans ECOSPHEARE.

## 8. Contrôles et limites

- Build des 19 pages et contrôle des références internes, images, h1, labels, IDs et contrastes de la palette.
- Test automatisé existant des états de mouvement réduit/visibilité/pause du film. Ce test ne simule pas le rendu ScrollTrigger.
- Navigateur desktop : manifeste épinglé, retrait du panneau, fiche Neptula à scrollY 468 (translation image −118,638 px), retour au catalogue réussi ; aucun débordement horizontal sur ces vues.
- Navigateur mobile 390 px : navigation du carrousel, contrôle du débordement, correction du contraste des légendes initialement restées blanches, puis nouvelle inspection visuelle.
- Aucune certification WCAG complète, aucun score Lighthouse annoncé, aucun test sur téléphone physique. La préférence de mouvement réduit de ScrollTrigger a été traitée dans le code ; son changement système en direct n'a pas été exercé dans cette passe.
- L'équivalence pixel à pixel avec LANDOR n'est pas revendiquée. Médias, contenu, marque, typographie disponible, ratio mobile et plusieurs contrôles accessibles diffèrent intentionnellement. Le formulaire ECOSPHEARE prépare toujours un e-mail ; aucun backend de réception n'a été ajouté.

Preuves visuelles : [manifeste desktop](audit-chrome/ecospheare-manifeste.png), [carrousel mobile](audit-chrome/ecospheare-mobile.png).
