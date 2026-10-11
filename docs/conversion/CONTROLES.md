# Contrôles de l’extension conversion

12 octobre 2026, prévisualisation locale `http://localhost:4173/`.

## Exécutés

- Build statique réussi : 19 pages.
- `scripts/check.mjs` : 492 références internes et ressources, 54 images avec alt et dimensions, titres principaux uniques, IDs uniques, champs étiquetés. Les références `srcset` sont désormais vérifiées séparément.
- `scripts/check-motion.mjs` : réduction du mouvement initiale/dynamique, pause/reprise, sortie de viewport et onglet masqué réussis. Aucun JS ajouté pour les nouveaux modules.
- `scripts/infographic-brief.mjs acquisition` : brief complet produit à partir des paramètres de la charte. Aucun appel facturé effectué par cette commande.
- Navigateur CUA : 1280×720 desktop, 390×844 mobile, 320×740 petit mobile, 768×1024 tablette. Largeur du document égale à la largeur du viewport à 320, 390, 768 et 1280 px.
- Inspection DOM à 320 px : aucun élément des nouveaux modules au-delà du bord droit. Légendes empilées à ≤360 px après constat d’un espacement trop faible entre flèches et mots.
- À 768 px : chapitres en deux colonnes (304/388 px observés), méthode en deux colonnes. À 390 px : lecture en une colonne, images 640 px chargées par le navigateur de test.
- FAQ budget/délais : ouverture au clic, contenu affiché, fermeture avec Entrée, focus conservé sur le summary.
- CTA « Décrire mon besoin » : navigation vers `/contact/`, champs et notice e-mail visibles. Aucun message envoyé pendant le contrôle.
- Ancre « Comprendre comment » : navigation vers `#acquisition`. Offset corrigé pour ne pas cumuler scroll-padding global et scroll-margin local.
- Console desktop : aucun warning/error retourné pendant la vérification.
- `git diff --check` : aucune erreur d’espacement.

## Contrastes calculés

Blanc/bleu : 9,41:1. Bleu/jaune : 8,34:1. Corps gris #34384d/blanc : 11,55:1. Le gris hérité des légendes a été repéré dans le rendu puis remplacé par du blanc.

## Chargement

4 illustrations, 8 fichiers WebP. Grands formats : 254 706 octets au total. Petits formats : 89 466 octets. Dimensions réservées, `loading="lazy"`, `decoding="async"`, `picture/srcset/sizes`. Les quatre PNG sources ne sont pas servis. Aucun script, framework, bibliothèque d’animation, traceur ou appel réseau externe ajouté.

## Preuves visuelles

- `desktop.png` : chapitre conversion et illustration en contexte.
- `mobile.png` : illustration du suivi et légende mobile.

## Limites

Pas de Lighthouse exécuté : les contrôles ont utilisé le navigateur autorisé CUA et les scripts statiques locaux, sans lancer un second navigateur par terminal. Aucun score Core Web Vitals ou gain de conversion revendiqué. Pas d’essai sur appareil physique, lecteur d’écran complet ni trafic réel. La page conserve un film de marque et un manifeste avant les nouveaux modules ; leur effet sur l’acquisition reste à tester. La preuve de performance nécessite encore des données client validées.

## Section équipe (ajout)

Cinq portraits QICS chargés et contrôlés visuellement sur desktop 1280 px ; grille à deux colonnes avec profil Sacha en première rangée sur mobile 390 px, sans débordement horizontal. 19 pages générées, 508 références vérifiées et 59 images avec alt/dimensions. Portraits source conservés sans génération ni retouche ; fichiers responsive locaux. Capture `equipe-desktop.png`. Coordonnées personnelles de la source non recopiées, CTA vers le contact ECOSPHEARE.
