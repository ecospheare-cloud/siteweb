# Audit de référence LANDOR

> **Mise à jour du 12 octobre :** consulter la [spécification détaillée du scroll et des interactions](AUDIT-LANDOR-INTERACTIONS.md) et l’[inventaire des 46 routes](AUDIT-LANDOR-PAGES.md). Ils corrigent notamment les dimensions du carrousel actif, le rendu du bloc « Up Next » et la distinction entre CSS présent et animations exécutées. Les observations ci-dessous sont l’historique de la première passe.

**Date : 11 octobre 2026.** Objet : comprendre les principes de composition et les comportements de LANDOR pour concevoir une expérience originale ECOSPHEARE.

## 1. Méthode, précision et périmètre

Trois niveaux de preuve sont employés :

- **O — Observé** : vu ou déclenché dans Google Chrome sur l’ordinateur de Mahé, par interaction native CUA. Ce n’est pas une reproduction déduite d’une capture fournie.
- **C — Code public vérifié** : valeur lue dans le HTML, les données de page Next.js, les feuilles CSS ou les scripts distribués par le site. Une durée CSS/JS est une durée **déclarée**, pas une mesure chronométrée de la durée réellement affichée.
- **E — Estimation visuelle** : rapport de surface ou disposition appréciée à l’écran. Aucune valeur estimée ne doit être traitée comme un relevé DOM de `getBoundingClientRect()`.

Le navigateur a été parcouru sur ordinateur, puis en émulation **390 × 844 pixels CSS**, taille affichée dans la barre Responsive de Chrome. Les captures natives sont en pixels d’écran Retina : elles ne permettent pas, seules, de déduire une dimension CSS. Le zoom et la surface utile du grand écran n’ont pas été calibrés au pixel ; les dimensions précises ci-dessous proviennent donc du code, pas d’une division des captures par deux.

Pages parcourues : accueil, Our work, détail Milan Symphony Orchestra, Contact us, Join us. États exercés : consentement refusé, showreel lancé et mis en pause, changement de projet visible dans le carrousel, panneau des langues ouvert, recherche d’un studio à Paris, filtre Creative des offres, menu mobile ouvert, catalogue et offres en disposition mobile.

**Limites de couverture :** les 38 fiches projets n’ont pas été ouvertes individuellement. Milan constitue l’échantillon de détail long. Les trois traductions, les pages juridiques et les destinations sociales externes ont été identifiées mais pas auditées écran par écran. Aucun formulaire n’a été envoyé, aucun CAPTCHA résolu, aucune candidature déposée. Les cartes, vidéos et effets dépendant d’un service tiers n’ont pas tous été exercés. Ce rapport est un audit de conception et d’implémentation observables, pas une certification exhaustive de conformité, de sécurité ou de performance.

## 2. Architecture de l’information

| Niveau | Destination | Fonction | Preuve |
|---|---|---|---|
| Accueil | `/` / `/en/` | Positionnement, démonstration vidéo, cas, expertises, présence mondiale | O+C |
| Catalogue | `/en/our-work/` | 38 cas dans les données de page de cette visite | O+C |
| Détail | `/en/our-work/milan-symphony-orchestra/` | Narration d’une transformation de marque par les médias | O+C |
| Contact | `/en/contact-us/` | Studios et prise de contact | O+C |
| Recrutement | `/en/join-us/` | Offres par discipline, destination Greenhouse | O+C |
| Langues | EN, japonais, allemand | Changement de version du site | O+C, destinations non parcourues |
| Pied de page | Confidentialité, cookies, préférences, Modern Slavery Act, conditions | Informations institutionnelles | O+C pour les liens |

Les liens anglais sont fournis avec `/en/` dans les données. Le navigateur a parfois affiché une URL sans ce préfixe après navigation. Il faut distinguer le `href` livré de l’URL finale après redirection. L’accueil ne cherche pas à exposer beaucoup de rubriques : trois destinations principales, puis une narration visuelle longue.

## 3. Fondations communes

### Typographie

**C :** famille `Landor Sans Beta`, fichiers WOFF2 distincts Regular 400 et Bold 700, `font-display: swap`. Cette police est propre à la référence et n’est pas redistribuée dans ECOSPHEARE. Le logo LANDOR est un dessin de marque sérif ; il ne faut pas l’assimiler à la police de texte.

| Élément | Valeur déclarée | Remarque |
|---|---|---|
| Corps global | 32 px, interligne 1.2 | Base ; de nombreux composants la surchargent |
| H1/H2 usuels | 48 px, poids 400 | 24 px à ≤599 px ; 2.5vw à ≥1920 px |
| Descriptions usuelles | 24 px | 18 px sur petit écran selon composant |
| Légende de carte projet | titre 18 px / 15 px mobile | Description 24 px dans la règle desktop |
| Footer juridique | 14 px / 12 px mobile | Densité plus forte que le corps éditorial |

**O :** formes sans sérif très lisibles, titres souvent centrés, capitales monumentales dans les sections de manifeste. L’effet de taille vient de la différence entre les grands aplats typographiques et les petites interfaces de navigation.

### Couleurs et matières

**C :** bleu principal `#0e1adf`, jaune acide `#ecfd01`, blanc `#fff`, noir `#000`, gris chaud `#f2f0ec`. Le pied de page emploie un beige `#dbd1c9` desktop, `#d9d1c7` mobile. La couleur dominante reste fortement saturée ; le beige sert de sortie visuelle.

La « texture » du hero n’est pas une simple image répétée ou un grain CSS. **C :** le CMS fournit deux vidéos de fond desktop, *water-ripple* et *water-bubble*, et trois versions mobiles, *bubbles*, *ripples* et *sea*. **O :** matière bleue en mouvement, reflets et volumes fluides. Les vitesses internes du mouvement, les boucles exactes et les paramètres de rendu d’origine ne sont pas déductibles des noms de fichiers. Aucune fréquence de simulation n’est annoncée ici.

**C :** dégradé footer desktop :

```css
linear-gradient(180deg,
  hsla(27,20%,82%,0) 14.42%,
  #dbd1c9 61.34%,
  #dbd1c9 86.44%)
```

Mobile : `linear-gradient(180deg,hsla(33,19%,82%,0),#d9d1c7 44.72%)`.

Les vidéos, le logo, la police et les illustrations LANDOR ne sont pas des ressources libres parce qu’ils sont consultables. Leur copie n’est pas incluse dans le livrable. Les principes de matière, profondeur et transition chromatique sont réinterprétés avec une texture pointillée originale et un dégradé ECOSPHEARE.

### Grille et rayons

**C :** conteneur courant avec 12 px latéraux ; 16 px à ≤599 px ; équivalent `.625vw` à ≥1920 px. Ce système place les médias très près des bords, tout en laissant plus de respiration interne aux textes. Grille de cas en deux colonnes, gouttière 12 px, largeur `calc(50% - 6px)` ; une colonne à ≤767 px. Coins médias 12 px desktop, 8 px petit écran. Boutons entièrement arrondis, rayon 300 px.

**E :** l’impression générale est celle d’un écran utilisé comme une grande affiche : peu de cadres imbriqués, grandes masses de couleur, alternance texte/média et espacements généreux. Ce n’est pas une grille de tableau de bord ni un système de cartes de SaaS standard.

## 4. Navigation et composants globaux

### En-tête desktop

**O :** fond blanc sur les pages intérieures, logo centré, liens à gauche, globe à droite. Une ombre bleue apparaît sous la barre. L’accueil commence avec une signature géante et ne présente pas immédiatement la même barre persistante.

**C :** hauteur 68 px desktop, 77 px mobile ; marges horizontales 24 px /16 px. État caché avec `top` négatif égal à la hauteur de barre. Transition générale déclarée de 250 ms `ease-in-out`. Ombre de l’état scrollé : `0 8px 10px 8px rgba(14,26,223,.4)`.

La présence des règles de masquage ne suffit pas à garantir la logique exacte de chaque changement de direction du défilement ; aucun seuil en pixels de cette logique n’a été chronométré.

### Navigation mobile

**O :** hamburger à gauche, logo au centre, globe à droite. Ouverture : panneau blanc depuis le haut, liens centraux de grande taille, bouton de fermeture. Le contenu de la page reste visible dessous. Ce n’est pas une nouvelle page.

**C :** changement de navigation à 1023 px. Panneau fixé, position `top: -100vh` à `0`; transition 500 ms, `cubic-bezier(.23,0,.22,1)`. Padding de panneau 68px 12px 42px ; variante mobile 77px 0 42px. Texte `min(60px,8.53vw)`, interligne 1.5. Le conteneur interne porte une transition d’opacité de 400 ms avec délai déclaré de 1 s. Ces timings ne constituent pas la mesure d’une vidéo de l’ouverture et peuvent se combiner avec d’autres états.

### Langues

**O :** clic sur le globe → petit panneau blanc, coins arrondis, titre et trois choix de langue avec marqueurs circulaires. Le panneau est ancré dans la zone supérieure droite, pas au centre de l’écran.

**C :** largeur 190 px, rayon 18.5 px, bordure blanche de 1.5 px, ombre `0 0 9px rgba(0,0,0,.25)`. Les choix sont des destinations de navigation. Aucun changement de langue n’a été soumis au test.

### Boutons et liens

**C :** bouton courant 30 px, interligne 1, padding `14px 36px 11px`; ≤767 px : 24 px et `10px 24px 7px`; ≤599 px : 18 px et `9px 16px 7px`.

**O :** au survol, une flèche vient prolonger certaines pilules, en augmentant leur largeur. **C :** largeur maximale de flèche de 0 à32 px, marge gauche de0 à15 px et droite de0 à−5 px ; transition300 ms. Mobile :21 px,8 px,−3 px. C’est une expansion géométrique, pas simplement un changement de couleur. Le `transition: all` de la référence peut provoquer du recalcul de mise en page ; ECOSPHEARE privilégie une flèche déjà allouée et un mouvement par `transform`.

### Cookies

**O :** bannière de consentement, refus testé. **C :** fond noir transparent 30 %, `backdrop-filter:blur(15px)`, rayon12 px, largeur max1200 px, largeur écran moins16 px, bas24 px. Boutons en14 px. Acceptation/refus sont présentés avec une forte similarité visuelle. Le mécanisme est OneTrust. L’absence de traceurs dans ECOSPHEARE dispense de reproduire cette bannière.

## 5. Accueil, séquence par séquence

### 5.1 Signature et matière

**O :** écran bleu, très grande signature blanche occupant la majorité de la largeur. Le premier contact est une marque, pas une grille de services. **C :** hero fixé en hauteur100vh avec minimum45vw. Padding logo32 px desktop et40px 15px mobile. Transition d’opacité du fond1 s linéaire ; déplacement de marge du logo300 ms ease-in-out.

**C :** script d’introduction contenant un déclencheur temporisé4000 ms et un scroll programmatique de1.5 s. Cette présence est une observation de code ; le déclenchement n’a pas été isolé ni chronométré dans chaque scénario d’arrivée/rechargement. Ne pas annoncer un comportement universel basé sur ce seul extrait.

### 5.2 Showreel

**O :** média large à coins arrondis, bouton translucide au centre. Le clic lance le film **dans la page**, recadre le défilement et révèle une commande Pause. Son entendu pendant la lecture. Mise en pause testée. Pas de fenêtre modale observée.

**C :** hauteur du cadre `min(64vw,90vh)` ; mobile `min(135vw,72vh)`. Bouton avec flou20 px et fond gris transparent40 %. Taille de texte au moins18 px avec échelle1.25vw. Transition de padding500 ms et d’opacité800 ms. État lecture basé sur le ratio56.25 % avec délai600 ms. Script de recentrage du scroll600 ms, `power1.inOut`. Masquage de commande après maintien2 s puis fondu500 ms dans le chemin de script relevé.

### 5.3 Cas mis en avant

**C :** sept éléments dans les données. **O :** un projet à la fois, grand média, CTA catalogue, segments horizontaux de progression en haut. Un changement de contenu a été vu ; le délai complet entre chaque diapositive n’a pas été mesuré.

**C :** hauteur `min(64vw,90vh)` ; progression4 px desktop /2 px mobile, écarts5 px /2 px, marge20 px /14 px. Titres et descriptions36 px desktop /20 px mobile. Entrée par translation verticale100 % vers0, durée300 ms ease-out ; retards100 ms pour le titre et200 ms pour la description. Aucune durée d’autoplay n’est déduite du CSS de Swiper.

### 5.4 Expertises et manifeste

**O :** composition typographique monumentale, puis trois domaines Consulting, Design, Experience. Les mots/sections se révèlent au fil de la lecture. Les captures intermédiaires de fondu ne sont pas l’état final de contraste.

**C :** présence de GSAP, ScrollTrigger et animations de composants. Déplacements de parallaxe relevés : `y:-37%`, début `top center`, fin `+=250%`, scrub0.1 ; autre configuration `y:-20%`, début `bottom top`, fin `+=200%`, scrub0.1. Un pin de hero commence `top top`, fin `+=100%`, `anticipatePin:1`. Les pourcentages de fin de scroll ne sont pas des secondes. Ils dépendent de la géométrie de la page et de la progression utilisateur.

### 5.5 Réseau et footer

**O :** texte de mission, carte mondiale pointillée, chiffres de présence, marques du groupe et WPP. Les chiffres appartiennent à LANDOR ; ils ne sont pas transférables à ECOSPHEARE. Les données de contact contiennent31 entrées de studios tandis que le discours d’accueil annonce30 implantations : ce ne sont pas nécessairement des unités identiques.

**O :** descente vers un bleu qui s’efface dans le beige, pilules jaunes de contact/recrutement, liens sociaux centrés et soulignés, bateau illustré puis mentions réparties. **C :** padding supérieur footer245 px desktop /140 px mobile ; boutons espacés16 px ; réseaux avec marge haute44 px /24 px ; bateau max225 px desktop,40 % mobile. Bas en trois zones sur desktop et retour à la ligne mobile.

## 6. Catalogue Our work

**O :** titre bleu centré, introduction noire centrée, grille deux colonnes sur ordinateur ; les premiers projets observés incluent SCANA Energy et Saudia. Chaque image constitue une large cible avec titre et description en dessous. Le média s’agrandit légèrement au survol. En390px : une seule colonne et affiches plus hautes, légendes sous le média.

**C :**38 items. Les données contiennent7 filtres **mais `showFilters:false`** : ne pas reconstruire un filtre comme s’il était visible sur cette version de LANDOR. Padding supérieur128 px /113 px mobile, titre max810 px, intervalle titre-description32 px /18 px. Média ratio3:2 desktop ; petit écran padding de représentation `min(150%,80vh)`. Image scale1.05 au survol, transform200 ms, opacity800 ms. Zone de légende marge `18px 0 48px`, padding horizontal32px.

Les effets d’image vidéo sur certaines cartes sont présents dans les scripts : lecture à l’entrée du pointeur, pause à la sortie, fondu200 ms. La présence de ce composant ne prouve pas que toutes les38cartes proposent une vidéo.

## 7. Fiche Milan Symphony Orchestra

**O :** hero large sous la barre, titre dans une pilule bleue, bouton rond X à droite ; ces commandes accompagnent le défilement. Le X est un retour au catalogue, pas la fermeture d’un dialogue superposé. Suit une grande introduction, une narration par médias, puis le texte de projet et le cas suivant.

**C :** séquence de modules livrée : breadcrumb → en-tête de cas → image hero → texte → vidéo → image → quatre vidéos → paire d’images → image → vidéo → paire d’images → vidéo → image → récit/équipe → cas suivant. Soit sept modules vidéo dans ce cas. Les deux paires constituent des compositions côte à côte desktop. Le cas suivant référencé est Topo Chico.

Les lecteurs ne sont pas tous lancés : aucun résultat sur le son, la durée, le sous-titrage ou le contrôle clavier de chaque vidéo n’est inventé. Les résultats commerciaux relatés dans le récit LANDOR restent attribués à ce projet et ne servent pas de chiffres décoratifs au nouveau site.

## 8. Contact us

**O :** titre et introduction centrés, puis recherche/liste de studios à gauche, grande carte claire à droite. Répartition estimée autour d’un tiers/deux tiers (**E**, pas un relevé de largeur). Marqueurs bleus et contrôles de zoom. Recherche « Paris » testée : la liste est réduite et la carte change de zone.

**C :**31 studios dans les données de page ; script de scroll interne vers un studio avec durée800 ms et délai100 ms. La carte est un composant interactif externe, pas une image statique. Tous ses marqueurs n’ont pas été ouverts.

**O+C :** formulaire avec prénom, nom, e-mail, société, fonction, pays, type de demande, studio, message, consentement aux conditions, option newsletter et contrôle antirobot. Des champs sont signalés facultatifs dans les données/labels. Aucun envoi : les libellés de succès et d’erreur présents dans les données ne prouvent pas la qualité de la réponse serveur ni l’accessibilité du traitement d’erreur. Sur mobile, l’ergonomie complète de ce formulaire reste à contrôler.

## 9. Join us

**O :** titre centré, disciplines sur plusieurs lignes, choix actif plus sombre/souligné, cartes d’offres en grille. Le clic Creative filtre effectivement les résultats. Carte sur gris chaud : ville bleue en haut, poste en capitales noires de fort poids au centre, discipline plus petite en bas. Trois colonnes à l’écran desktop observé ; une en 390 px. Sur mobile les filtres deviennent une sélection compacte.

**C :**61 offres dans l’instantané. Animation de cartes déclarée700 ms avec départ scale 0.7/opacité 0 vers 1 ; délai en cascade par index modulo2 ou3, pas de 150 ms. Ce délai dépend de la branche de grille active. Les destinations de candidature sont Greenhouse. Leur parcours n’est pas audité ici.

## 10. Accessibilité, mouvement et performance : conclusions prudentes

- La hiérarchie visuelle et le contraste bleu/blanc sont forts, mais cela ne certifie pas tous les états. Certaines petites mentions et surimpressions sur vidéos nécessiteraient un contrôle par état.
- Le CSS global retire des outlines puis réintroduit un contour1px sur certains liens/boutons hors mode tactile. Une revue clavier complète est nécessaire avant de réutiliser cette stratégie. ECOSPHEARE conserve un focus explicite de3 px.
- L’arbre accessible a exposé des boutons vidéo redondants et des commandes de carte peu nommées. Ce sont des points à investiguer, pas une conclusion globale de non-conformité.
- Aucun traitement `prefers-reduced-motion` n’a été trouvé dans le module de composants304 analysé. Des bibliothèques contiennent du `matchMedia`, ce qui ne démontre pas que l’ensemble des animations du site respecte cette préférence. Le comportement complet n’est donc pas certifié.
- Les médias vidéo, la carte, le consentement et les bibliothèques d’animation impliquent des coûts réseau/exécution. Aucun score Lighthouse, LCP, INP, CLS, débit ou cadence d’image mesuré n’est revendiqué pour LANDOR.
- Le scroll pinning et le scroll programmatique peuvent servir la narration, mais compliquent la maîtrise du défilement. ECOSPHEARE conserve le scroll natif et une matière statique.

## 11. Ce qui est transféré à ECOSPHEARE

Conserver : titres ambitieux et peu nombreux, espace, grands médias, pilules, contraste de couleurs, grille de travaux, récit avant détail, footer comme invitation claire.

Adapter : sujet principal centré sur l’acquisition, cinq expertises explicites, vrais textes de services, formulaire transparent, filtres utiles au portfolio, crédits par projet, lien entre création et suivi commercial.

Ne pas reprendre : marque LANDOR, police propriétaire, bateau, vidéos d’eau, chiffres mondiaux, performances de leurs clients, navigation de recrutement sans besoin métier ECOSPHEARE, déplacement imposé du scroll, curseur personnalisé.

## 12. Registre de sources techniques

Pages : [accueil](https://landor.com/), [catalogue](https://landor.com/en/our-work/), [contact](https://landor.com/en/contact-us/), [recrutement](https://landor.com/en/join-us/), [Milan Symphony Orchestra](https://landor.com/en/our-work/milan-symphony-orchestra/).

Feuilles et modules publics observés, noms susceptibles de changer lors d’un déploiement :

- `/_next/static/css/383ca74e1c512ba8.css` : bases typographiques, couleurs, utilitaires.
- `/_next/static/css/28c2988b4b6bf818.css` : composants et media queries.
- `/_next/static/css/967e1b21fa99bddd.css` : styles des bibliothèques média.
- `/_next/static/chunks/304-75a0a4b4424b9377.js` : composants spécifiques et transitions.
- `/_next/static/chunks/409-733217031c959822.js` : bibliothèques d’animation/navigation.
- Données `__NEXT_DATA__`, `props.pageProps.initialProps.PageData.contents` : modules et contenus distribués au navigateur.

Les fichiers techniques de référence ont été consultés localement pour l’audit. Ils sont exclus du dépôt de livraison. Le rapport conserve les relevés utiles, pas une copie distribuable du site tiers.
