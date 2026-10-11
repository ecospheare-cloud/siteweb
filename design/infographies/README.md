# ECOSPHEARE : Lumière utile

Système d’illustrations explicatives original, version 1, 12 octobre 2026.

## Principe de direction artistique

La lumière représente une intention. Le verre rend visible le mécanisme qui la conduit vers une action utile. Le jaune ponctue une étape. Le bleu relie la série à l’univers liquide de l’accueil. Aucun objet ne doit être ajouté uniquement pour remplir une composition.

Quatre images générées avec l’outil intégré **Imagegen**, sans API ni clé externe. Les prompts effectivement utilisés sont dans `prompts.json`. Les paramètres communs sont dans `system.json`. Les originaux PNG sont conservés ici ; les huit dérivés WebP sont dans `public/assets/infographies/`.

| Sujet | Mécanisme | Traduction visuelle | Texte HTML |
|---|---|---|---|
| Acquisition | Relier une recherche à une offre pertinente | Rayons convergeant dans une lentille | Une recherche → Votre réponse → Une visite qualifiée |
| Conversion | Lever les obstacles d’un parcours | Trois portiques traversés par un rayon | Comprendre l’offre → Être rassuré → Prendre contact |
| Suivi | Structurer les prochaines actions | Canaux parallèles et signaux à différents stades | Centraliser → Qualifier → Organiser la suite |
| Mesure | Améliorer par itérations | Circuit ouvert, quatre jonctions, un signal | Observer → Comprendre → Ajuster |

Les images sont des métaphores, pas des schémas scientifiques, des captures de logiciel ou des preuves de résultats. Le suivi commercial n’est pas littéralement une bifurcation de tuyaux. Le texte visible fournit le sens métier exact. La dernière image représente une boucle conceptuelle ; le nombre de jonctions n’est pas une donnée quantitative.

## Invariants

- Fond bleu ultramarin `#0e1adf`, verre transparent, reflets blancs, accent `#ecfd01` très limité.
- Caméra orthographique en trois-quarts, lumière principale en haut à gauche, ombres de contact douces.
- Format 3:2, objet complet, marges de sécurité, aucune information indispensable au bord.
- Un mécanisme principal par image, trois étapes de lecture au maximum dans sa légende.
- Pas de texte incrusté, métriques inventées, témoignages, captures fictives, logos tiers, particules gratuites ou copie d’asset LANDOR.
- Les variations de bleu dues à l’éclairage sont admises ; les légendes reposent sur un aplat CSS de contraste stable.

## Générer le prochain brief

```sh
npm run art:brief -- acquisition
npm run art:brief -- qualification "A clear glass selector routes distinct incoming signals into organized channels, illustrating lead qualification without rejecting people or implying guaranteed sales."
```

La commande prépare un prompt, **elle ne lance pas une génération ni une facturation**. Utiliser ensuite l’outil Imagegen intégré, une image par appel. Pour renforcer la cohérence, joindre l’un des masters de cette série comme référence de style après inspection. Une génération ne sera jamais parfaitement déterministe : valider visuellement chaque sortie.

## Recette de production

1. Écrire le besoin du prospect en une phrase et nommer le mécanisme expliqué.
2. Choisir une métaphore unique. Préparer d’abord la légende HTML ; si elle ne rend rien compréhensible, revoir le sujet.
3. Produire le brief avec la commande et ajouter le prompt retenu au manifeste.
4. Générer une image, l’inspecter en grand puis à 350 px de large. Refuser les objets coupés, chemins incohérents, texte parasite et détails inutilisables sur mobile.
5. Conserver le master et exporter en WebP 640/1280 px, qualité 84. Budgets : 40 Ko / 100 Ko par image.
6. Utiliser le composant `art()` de `content/home-conversion.mjs` : `picture`, `srcset`, `sizes`, dimensions, lazy loading, légende HTML en liste ordonnée.
7. Si le contenu est entièrement expliqué par la légende et le texte voisin, garder `alt=""` pour éviter la répétition. Sinon fournir un alt précis ou une description longue.
8. Vérifier mobile, desktop, zoom, lecture sans image, contraste et ordre du DOM. Les images restent statiques, aucun mouvement ni JS additionnel.

## Mesures v1

| Image | 640 px | 1280 px |
|---|---:|---:|
| Acquisition | 13 156 octets | 35 432 octets |
| Conversion | 26 876 octets | 78 630 octets |
| Suivi | 27 020 octets | 78 454 octets |
| Mesure | 22 414 octets | 62 190 octets |

Total grand format : 254 706 octets (248,7 Kio). Petit format : 89 466 octets (87,4 Kio). Le navigateur choisit selon largeur et densité d’écran ; un mobile à forte densité peut charger 1280 px. Les masters ne sont pas copiés dans `dist/`.

## Références et limites

Continuité avec le verre lumineux déjà créé pour ECOSPHEARE. Awesome DESIGN.md / Stripe inspire uniquement la séparation entre illustration, explication et action ; aucun composant, couleur, typographie propriétaire ou résultat de Stripe n’est repris. La composition LANDOR demandée est conservée dans les séquences de marque et de portfolio. Le nouveau contenu vise l’acquisition de clients propre à ECOSPHEARE.
