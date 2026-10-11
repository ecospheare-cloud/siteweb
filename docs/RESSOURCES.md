# Ressources, provenance et droits d’utilisation

## Autorisation de travail

Mahé a explicitement demandé d’utiliser le portfolio QICS et a fourni le dépôt `systemeqicsagency-cyber/QICS-AGENCY`. Les fichiers repris viennent de la copie de ce dépôt dans `site-travaux`, révision `d4099fb842225ccbdc54e2efac8bb709714b6180`. L’autorisation de cette mission n’est pas une licence publique générale sur les marques clientes. Le dépôt ECOSPHEARE conserve ces médias pour la présentation de ces collaborations, avec leurs crédits.

Source éditoriale : `content/projets.json`. Source média : `public/travaux/`. Extraits nécessaires conservés dans `content/projects-source.json`. Les formulations à la première personne de QICS sont adaptées en descriptions neutres au rendu.

| Projet | Fichiers utilisés / disponibles dans ce livrable | Nature de la source |
|---|---|---|
| Eye-D Studio | `eyed-site.webp` | Capture de portfolio ; œuvres exposées créées par Eye-D |
| House of Lucia | `lucia-site.webp` | Capture d’accueil e-commerce |
| Neptula | fichiers `neptula-*.webp` | Captures web, extraits de marque, mises en situation |
| Nexus | fichiers `nexus-*.webp` | Captures Studio/Community et signatures |
| Thomas Fit | `thomas-fit-site.webp` | Capture de page produit |
| SAP | fichiers `sap-*.webp` | Extraits de marque et mises en situation |
| QICS Branding | `qics-branding-site.webp` | Capture de plateforme |
| QICS Studio | `qics-studio-site.webp` | Capture de vitrine du logiciel QICS |

Les mises en situation ne sont pas présentées comme des photographies de réalisations matérielles vérifiées. Les nouvelles galeries conceptuelles assistées par IA de QICS ne sont pas utilisées pour remplir artificiellement les dossiers.

Les fichiers de plus de1600 px ont été réduits pour la diffusion ; WebP qualité 85. Les originaux QICS n’ont pas été modifiés.

## Créations originales pour ECOSPHEARE

`public/assets/orbite.webp` et `orbite-768.webp` : texture de sphère/ruban lumineux pointillé sur fond bleu, générée pour ce projet avec Imagegen. Elle ne provient pas d’un fichier LANDOR. La variante768 est une optimisation de taille du même asset.

Les cinq planches dans `docs/design/` sont des études générées de composition. Elles servent à documenter la direction, pas à remplacer du HTML ni à attester de projets réalisés. L’étude Projets comporte des images conceptuelles, remplacées dans le site par les ressources QICS.

Infographie de méthode : HTML/CSS original, quatre étapes métier. Aucun dessin de marque tierce copié.

## Police

Manrope variable : [source Google Fonts](https://github.com/google/fonts/tree/main/ofl/manrope), licence SIL Open Font License 1.1, fichier `public/fonts/OFL.txt`. Hébergement local. Le fichier variable WOFF2 Latin est servi (source officielle fonts.gstatic.com, v20) ; pas de police LANDOR.

## LANDOR

Référence d’audit uniquement. Pas de vidéo, police, logo, bateau, photographie de cas ou JavaScript LANDOR dans les ressources livrées. Les copies de travail destinées à examiner le code public sont exclues de Git via `docs/reference/`.

## À compléter

Informations légales de l’éditeur, détails d’intervention et preuves de résultats des collaborations, visuels autorisés des quatre projets uniquement cités. Le site public `ecospheare.com` a répondu 404 pendant la tentative de récupération du logo ; il n’a pas servi de source de copywriting.


## Animation du hero et logo fournis le 11 octobre

Les fichiers Fichier 7.svg (noir) et Fichier 8.svg (blanc), transmis par le client, sont conservés sans modification dans public/assets. Le film source a été généré dans Gemini avec les références ECOSPHEARE, puis monté pour le web. Aucun fichier LANDOR n’est utilisé. Voir MOTION.md pour la provenance et les étapes.

## Texture originale de la deuxième direction

`public/assets/liquid-glass.webp` : création image_gen du 12 octobre pour ECOSPHEARE, sans ressource LANDOR importée. Prompt et méthode dans `REFONTE-LANDOR.md`. `ecospheare-water.mp4` : matière liquide recadrée du film Gemini ECOSPHEARE déjà généré, montage aller-retour. Aucun envoi externe de données visiteurs.

## Infographies « Lumière utile » (12 octobre 2026)

Quatre illustrations originales générées avec Imagegen intégré pour cette commande. Prompts exacts : `design/infographies/prompts.json`. Direction artistique et processus réutilisable : `design/infographies/README.md` et `system.json`. Masters PNG dans ce dossier ; versions WebP 640/1280 px dans `public/assets/infographies/`. Aucun asset LANDOR réutilisé. Les illustrations sont conceptuelles et ne constituent pas une preuve de résultats ni des captures de logiciels existants.

## Équipe reprise de QICS (12 octobre 2026)

Source : copie locale du dépôt QICS-AGENCY, révision d4099fb842225ccbdc54e2efac8bb709714b6180, `lib/content.ts` (`EQUIPE`) et `components/agence/collective.tsx`. Dix portraits WebP copiés sans modification depuis `public/equipe/` vers `public/assets/equipe/`, en 320 et 520 px. Personnes : Sacha Z, Mahé Da Sylva, Julien, Ophely et Océan (orthographe du contenu source conservée).

Les rôles et spécialités sont adaptés en descriptions à la troisième personne sans ajout de qualification. Sacha est présenté en premier : le contenu QICS associe son profil à ecospheare.com. La section situe explicitement ces personnes dans la collaboration ECOSPHEARE/QICS et indique une mobilisation selon le projet. Elle ne les présente pas comme salariés d’ECOSPHEARE. Les numéros WhatsApp ne sont pas repris ; les demandes restent centralisées sur le contact ECOSPHEARE fourni.

Adaptation : portraits réels détourés sur fonds bleu/pâle, titres Manrope, grille 5 colonnes desktop avec Sacha agrandi, grille 3 colonnes tablette puis 2 colonnes et portrait principal pleine rangée mobile. Pas d’animation automatique, médias dimensionnés et lazy loading, alt nominatifs. Section placée avant la méthode.
