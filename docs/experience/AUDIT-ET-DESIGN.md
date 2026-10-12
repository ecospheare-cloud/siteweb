# ECOSPHEARE : audit sévère et refonte « Prisme »

12 octobre 2026. Périmètre : accueil et composants partagés des 19 pages. Audit du rendu navigateur et du CSS, sans prétendre mesurer une émotion ou un taux de conversion. Le terme « dopamine » du brief est traduit en clarté des choix, anticipation des actions et retours visuels satisfaisants.

## Diagnostic avant intervention

| Priorité | Constat et emplacement | Conséquence | Correction |
|---|---|---|---|
| Haute | `public/editorial.css:2`, `public/style.css:2`, `public/conversion.css:6` : palette redéfinie, jaune acide et fond chaud indépendants des visuels bleus | Ruptures de ton entre univers optique, argumentaire et footer | Palette sémantique commune ; bleu glacier remplace les grandes surfaces jaunes/beiges |
| Haute | `scripts/build.mjs` : hero réduit à une signature gigantesque ; navigation initialement masquée | L'activité et la prochaine action ne sont pas immédiates | Navigation visible à l'arrivée, phrase d'orientation et lien vers les projets dans le premier écran |
| Haute | `public/app.js` : autoplay interrompu au survol du carrousel entier et après navigation manuelle ; reprise au clic encore bloquée par le focus | Un portfolio censé défiler peut paraître immobile ; pause peu compréhensible | Cycle de lecture explicite, progression conservée en pause, reprise opérationnelle, commandes textuelles |
| Moyenne | `public/editorial.css` : légendes et commandes reconfigurées à plusieurs endroits | Hiérarchie variable, styles fragiles | Règles finales cohérentes ; légende sous image sur mobile et noms de projets sur desktop |
| Moyenne | `public/conversion.css:4` : trois grands zigzags successifs image/texte | Effet catalogue répétitif et regard qui traverse sans cesse l'écran | Axe de lecture constant ; images maintenues à droite et sticky sur grand écran |
| Moyenne | Titres de 34, 36, 48, 58, 64, 72, 76 px selon les sections | Les niveaux d'information sont moins évidents | Échelle display commune et hiérarchie corps/titres/labels |
| Moyenne | Parcours et figures statiques malgré un univers de mouvement | Opportunité manquée d'expliquer les leviers | Guide à trois objectifs et agrandissement contextuel de chaque figure |
| Moyenne | Footer et dernier CTA traités comme deux univers indépendants | Fin de parcours graphiquement décousue | Surfaces glacier/pâle et même famille de boutons |

## Direction artistique

Lecture : agence B2B créative, langage éditorial et optique, interface native existante. Variance 8, intensité de mouvement 7, densité 4. Stack statique conservée ; pas de migration de framework. Le motif de lumière, les logos du client, les portraits et les projets réels restent les repères de marque.

Taste guide la composition et la motivation des mouvements. Awesome DESIGN.md, référence locale Stripe, informe la séparation entre encre, action et surface teintée ; sa palette et sa police propriétaire ne sont pas copiées. La préférence explicite du projet pour une ouverture immersive bleue et un manifeste prime sur la recette générique d'un thème uniforme. Les contenus après le manifeste partagent des surfaces claires d'une seule famille.

### Tokens

| Rôle | Valeur | Usage |
|---|---|---|
| Action et signature | `#0e1adf` | Liens, boutons primaires, titres, motif optique |
| Bleu profond | `#101b89` | Hover et profondeur du manifeste |
| Encre | `#111b4d` | Texte principal sur surface claire |
| Texte secondaire | `#505d7e` | Descriptions et informations secondaires |
| Toile | `#f7f9ff` | Base froide proche du blanc |
| Surface | `#edf1ff` | Équipe, mesure, footer |
| Glacier | `#dce5ff` | Sélection, dernier CTA, accents clairs |
| Séparation | `#c9d3ec` | Traits, champs, contours |

Les petits accents lumineux déjà présents dans les images sont conservés ; ils ne deviennent plus de grandes surfaces UI. Les photographies de projets conservent leurs couleurs authentiques.

Typographie : Manrope auto-hébergée, aucun nouveau téléchargement de police. Display `clamp(38px,4.7vw,72px)`, interligne proche de 1,08 ; texte courant 16–19 px ; labels 12–14 px. Pas de mélange de polices dans un titre. Rayons : 16 px sur médias et surfaces ; 24 px sur fenêtres ; pilules pour commandes. Flèches directionnelles natives uniformisées, sans nouvelle famille d'icônes.

## Chorégraphie

| Interaction | Déclencheur | Comportement |
|---|---|---|
| Paragraphes structurants | Haut du bloc à 92 % du viewport | Translation Y 32→0, 800 ms, power3.out, une seule fois ; pas de texte caché par défaut |
| Portraits et étapes | Groupe à 90 % du viewport | Translation Y 36→0, 700 ms, décalage 90 ms |
| Infographies | De l'entrée au bas de l'image au centre | Scale 1,08→1, scrub lissé 0,6 ; relation au scroll, pas une durée fixe |
| Méthode | Étape dans la zone 75–35 % | Surface glacier et élévation de 8 px desktop |
| Portfolio | Visible à au moins 25 % | 6 secondes par projet, progression linéaire, translation et fondu de 700 ms |
| Pause portfolio | Bouton, focus sur un choix/lien, onglet caché, hors écran ou dialog | Temps restant conservé ; reprise à partir de ce temps |
| Navigation manuelle | Flèche ou choix | Nouveau cycle ; focus protège la lecture au clavier |
| Fenêtre | Clic explicite | Entrée 360 ms, Y 24→0 et scale .98→1 |
| Choix d'objectif | Bouton de besoin | Contenu recommandé, focus sur le nouveau titre, transition 280 ms |
| FAQ | Ouverture native | Contenu translateY −6→0 et opacité en 240 ms |

La préférence reduced-motion supprime les nouveaux déplacements et l'autoplay, tout en gardant la navigation manuelle. Les effets scroll existants restent désactivés dans ce mode. Aucun scroll forcé, aucune ouverture programmée, aucun compte à rebours commercial ni preuve inventée.

## Fenêtres et orientation

Le guide propose trois objectifs : être trouvé, recevoir des demandes, suivre ses prospects. Chaque réponse décrit trois étapes et préoriente le select du formulaire de contact. Il ne constitue pas un diagnostic personnalisé. Aucune donnée saisie ou stockée.

Les figures s'agrandissent dans un dialog natif avec titre et étapes HTML. Échap, fermeture explicite et clic sur le backdrop permettent de revenir ; le focus est restitué à l'élément déclencheur. Les autres contenus deviennent inertes via `showModal`. Le bouton flottant apparaît après l'introduction, disparaît devant le portfolio pour préserver les commandes et pendant le dernier CTA.

## Validation

Consulter CONTROLES.md pour les contrôles effectivement réalisés et leurs limites. Les références de revue sont les [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md), notamment les contrôles nommés, focus, reduced-motion et pause des animations. Aucun score Lighthouse, gain de conversion ou audit WCAG exhaustif n'est revendiqué.
