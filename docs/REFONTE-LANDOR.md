# Refonte ECOSPHEARE, deuxième direction

12 octobre 2026. Demande du client : retrouver beaucoup plus fidèlement la composition de LANDOR, jugée trop éloignée dans la première version.

## Comparaisons réalisées

L’audit initial dans Chrome a servi de base. Pendant cette reprise, Chrome n’a pas chargé la page puis le Mac s’est verrouillé. La comparaison a été poursuivie dans le navigateur intégré : accueil LANDOR et ECOSPHEARE ouverts simultanément, plusieurs passages entre ouverture, panneau d’introduction, média, carrousel et manifeste. Les copies des vidéos, du logo et de la police LANDOR restent exclues du site livré.

Mesure DOM supplémentaire sur LANDOR, viewport 1280×720 : introduction en 48 px, padding 46/32/43 px, panneau blanc de 1234 px de large débutant à y543,5 dans l’état observé. Cet état comprend les transitions propres au site ; ce n’est pas une constante universelle.

## Changements concrets

- Ouverture dominée par une signature ECOSPHEARE très large ; suppression du hero commercial à deux colonnes.
- Texture originale de verre/liquide bleu générée pour le projet, combinée au mouvement liquide provenant du film Gemini déjà créé. Ce n’est pas la vidéo LANDOR.
- Panneau blanc arrondi superposé à 24 % de la hauteur du premier écran, avec déclaration centrée puis film de marque. Sur mobile : superposition de 22 %.
- Film Gemini préservé dans un lecteur intégré, ouverture volontaire, commandes natives après lecture et focus clavier transmis au lecteur. La hauteur rejoint le ratio 16:9 au démarrage pour éviter des bandes noires excessives.
- Bouton du catalogue au-dessus d’un grand carrousel, marges 12 px, quatre cas : Neptula, SAP, House of Lucia, Eye-D. Les visuels et les crédits sont issus du portfolio QICS autorisé.
- Légendes centrées ; bouton suivant/précédent ; sélection directe ; autoplay déclaré 6500 ms, interrompu au survol, au focus, hors écran, onglet masqué, mouvement réduit ou après sélection manuelle. Commande pause/reprise.
- Manifeste en capitales, trois domaines Création/Visibilité/Acquisition donnant accès aux cinq expertises ; section collective sans chiffres inventés.
- Navigation compacte blanche de 68 px (77 px mobile), signature centrée, liens à gauche ; apparaît lorsque la grande signature quitte l’écran. Menu mobile en panneau blanc.
- Footer bleu vers beige avec boutons jaune acide, e-mail réel et symbole original ECOSPHEARE.
- Pages intérieures : titres centrés, grille de médias rapprochée des bords, légendes sobres, contact recentré. Les filtres du catalogue ont été retirés pour suivre la présentation LANDOR observée (`showFilters:false`).

## Fondations de cette direction

Couleur principale #0e1adf ; blanc #fff ; jaune #ecfd01 ; beige de sortie #dbd1c9. Manrope auto-hébergée pour le corps et la signature ; Arial/Helvetica Bold pour les manifestes. La police propriétaire LANDOR n’est pas utilisée. Les fichiers SVG client restent inchangés.

La feuille `public/editorial.css` remplace la composition publique tout en conservant les champs et composants fonctionnels de `public/style.css`. HTML statique généré, JavaScript natif, aucune nouvelle dépendance exécutée dans le navigateur.

## Contrôles effectués

- Construction des 19 pages et vérification automatique des liens, ressources, H1, dimensions/alternatives images et libellés de champs.
- Contrastes calculés : blanc/bleu 9,41:1 ; noir/jaune 18,62:1 ; noir/beige 13,98:1. Ces valeurs concernent les aplats, pas chaque pixel des médias.
- Navigateur intégré à 1280×720 : comparaison visuelle, lecture du film, pause et reprise du fond ; pause du mouvement CSS et vidéo confirmée simultanément.
- Carrousel : action « suivant » vérifiée sur SAP ; état du projet et boutons accessibles observés. La cadence de 6500 ms est déclarée dans le code, pas chronométrée au navigateur.
- 390×844 : ouverture et menu mobile contrôlés ; film démarré avec readyState 4 et commandes disponibles.
- 320 px : catalogue, fiche Eye-D et contact sans débordement horizontal ; tous les champs du contact ont un label associé.
- `scripts/check-motion.mjs` : variantes mouvement réduit, changement de préférence, visibilité et pause volontaire validées avec doubles de navigateur.
- Aucune erreur console observée durant les contrôles locaux.

## Limites explicites

La composition a été rapprochée de LANDOR ; ce n’est pas une identité pixel à pixel : contenus, marque, fonte et médias diffèrent. Le scroll reste maîtrisé par le visiteur, sans déplacement automatique après quatre secondes. Le contact utilise la messagerie locale, sans inventer un réseau de studios. Pas de nouveau score Lighthouse, de test Safari/Firefox ni de mesure terrain revendiqués. Les scores précédents restent ceux de la toute première version statique.

## Visuel généré

Outil intégré image_gen, mode génération. Fichier final : `public/assets/liquid-glass.webp` (1920 px de large, environ 178 Kio). Prompt : « Original premium abstract macro photograph / physically rendered CGI of massive smooth transparent liquid-glass bubbles and rounded water lenses, filling the frame edge to edge, saturated electric ultramarine #0e1adf, sculptural clear edges, deep navy shadows, cobalt highlights, glossy water surface, large high-contrast rounded shapes. No particles, no dotted sphere, no text, no logo, no copied brand assets. Landscape 16:9 website hero texture for ECOSPHEARE. »

Le fichier `ecospheare-water.mp4` est un recadrage du côté gauche du film Gemini, sans symbole, suivi de sa lecture inversée : il apporte les reflets mobiles. Le logo animé original reste accessible dans le film de marque.


## Mise à jour du 12 octobre : audit Chrome et mouvement

La [passe Chrome et sa matrice de transposition](AUDIT-LANDOR-CHROME.md) complètent ce document. Le site intègre désormais un header directionnel, un manifeste épinglé sous le panneau blanc, un carrousel en fondu de 600 ms / intervalle de 6 s, des légendes mobiles séparées et des héros immersifs sur les fiches projets. Les anciennes mentions de ces fonctions comme absentes sont historiques. Validation : 19 pages, 592 références, 59 images avec alt et dimensions ; contrôles navigateur desktop/mobile et test des états du film réussis. Le mouvement ScrollTrigger dispose d’un repli reduced-motion, sans validation sur appareil physique.
