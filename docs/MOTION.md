# Film du hero ECOSPHEARE

11 octobre 2026. Demande : génération dans Gemini, transformation de la matière pointillée vers le logo officiel, fond liquide bleu, lecture en boucle.

## Sources et fabrication

- Conversation Gemini : https://gemini.google.com/app/fd78ede9106ed7a7
- Génération vidéo effectuée dans le compte QICS, avec deux références importées : `motion/sphere-depart.png` et `motion/logo-arrivee.png`. Le prompt est conservé dans `motion/gemini-prompt.txt`.
- Source téléchargée : `motion/gemini-original.mp4`, dix secondes. Le nom précis du modèle vidéo n’a pas été affiché dans le résultat inspecté ; ne pas déduire le moteur vidéo du sélecteur de conversation Flash-Lite.
- Fond liquide original généré ; aucune vidéo ou texture LANDOR copiée.
- Symboles SVG originaux noir/blanc copiés sans modifier les tracés. Le fichier blanc a été rasterisé sur fond #315bff pour le plan final : hauteur 510 px, position x760/y105 dans une composition 1280×720.
- Gemini donne une interprétation approchée du symbole. Pour respecter la marque, les cinq premières secondes générées sont suivies d’un fondu de 1,5 seconde vers la composition issue du SVG original, puis d’un arrêt. La deuxième moitié lit ce montage en sens inverse. Ce n’est pas un morphing mathématique point à point du SVG.

## Livrable technique mesuré

MP4 H.264, 1280×720, 24 images/s, durée lue dans Chrome 15,958333 secondes, 3 003 471 octets. Sans piste audio. Encodage CRF23, preset slow, yuv420p et faststart. Le film source reste dans la documentation, seul le fichier optimisé est servi au navigateur. L’arrivée reprend la géométrie originale, avec rasterisation et compression vidéo : pas de promesse d’identité pixel à pixel.

Le raccord inverse remet la sphère dans son état initial. Différence absolue moyenne entre images décodées à 0 et 15,91 s, réduites à 160×90 RGB : 2,715 niveaux sur 255. Cette mesure inclut la compression et un léger écart temporel, et ne prouve pas une perfection perceptuelle.

## Comportement

- Lecture automatique muette, inline, boucle native. Le poster reste affiché avant décodage et en cas d’échec.
- Commande Pause/Lecture de 44 px minimum, nom accessible explicite, activation clavier.
- Pause hors du hero ou lorsque l’onglet est masqué. Une pause volontaire persiste au retour dans le hero.
- `prefers-reduced-motion: reduce` empêche le chargement de la source vidéo et affiche le logo fixe. Une modification de préférence pendant la visite retire la source et arrête la lecture.
- Sur mobile, film dans les 350 px inférieurs du hero avec cadrage à droite ; texte au-dessus. Un voile bleu protège la lisibilité.
- Symboles originaux également ajoutés au header et au favicon. Le mot ECOSPHEARE reste composé en Manrope.

## Contrôles et limites

- Chrome : vidéo décodée (`readyState=4`), lecture et durée confirmées ; pause et reprise activées au clavier, états `paused` contrôlés.
- Aucun débordement horizontal aux largeurs CSS effectivement lues de 1800, 487 et 320 px. Le zoom du profil Chrome produit des dimensions différentes de celles demandées à l’outil (1440, 390 et 256). Captures dans `motion/hero-desktop.jpg` et `motion/hero-mobile.jpg`.
- Aucune erreur console observée pendant le contrôle.
- `node scripts/check-motion.mjs` vérifie les branches réduction du mouvement, changement de préférence, pause/reprise, hors écran et visibilité de l’onglet avec doubles de navigateur. Ce n’est pas un test sur appareil physique.
- `node scripts/check.mjs` : 19 pages, 450 références internes/ressources, 51 images avec dimensions et attribut alt.
- Les scores Lighthouse précédents concernent le hero statique. Pas de nouveau score revendiqué pour cette version ; le film ajoute 3 Mo au téléchargement lorsque la lecture est autorisée.
- Safari, Firefox et smartphones physiques non testés. La lecture automatique dépend aussi des restrictions d’économie d’énergie du navigateur.
