# ECOSPHEARE

Site original consacré à l’acquisition digitale : SEO, GEO, Google Ads, sites web, web apps/SaaS/CRM.19 pages statiques, sans dépendance JavaScript tierce à installer.

## Consulter

Prévisualisation locale : **http://localhost:4173** lorsque le serveur tourne.

```sh
npm run dev
```

Nécessite Node.js 20 ou supérieur. `dev` génère les pages puis sert `dist/` sur 127.0.0.1:4173. Après une modification de source, exécuter `npm run build` puis recharger le navigateur. Le serveur continue de servir les fichiers actualisés.

```sh
npm run build
npm run check
```

Le dossier `dist/` est généré, non suivi dans Git. Il contient un site exportable vers un hébergement statique. Le serveur fourni est destiné à la prévisualisation locale, pas à une exposition publique directe.

## Documents

- [Audit LANDOR](docs/AUDIT-LANDOR.md) : pages, composants, responsive, mesures déclarées et observations séparées.
- [Système de design](docs/DESIGN.md) : direction, tokens, références de sections et interactions.
- [Provenance des ressources](docs/RESSOURCES.md) : source QICS, visuels générés, police et limites.
- [Vérifications](docs/VERIFICATIONS.md) : contrôles effectués et points restant à valider.

## Architecture

- `scripts/build.mjs` : génération des routes, structure HTML et templates communs.
- `content/services.mjs` : contenu des cinq expertises.
- `content/projects-source.json` : extraits des dossiers QICS.
- `public/style.css` : responsive, design tokens et mouvement réduit.
- `public/app.js` : menu, filtres partageables, préparation du brief.
- `scripts/check.mjs` : intégrité des pages, liens, images, labels et contrastes.

Routes : `/`, `/expertises/`, cinq sous-pages expertise, `/projets/`, huit fiches projet, `/approche/`, `/contact/`, `/confidentialite/`, et document404.

## Contact

Adresse fournie : **Ecospheare@gmail.com**. Le formulaire prépare un e-mail dans la messagerie du visiteur. Il n’envoie aucun message côté serveur et ne conserve pas les saisies. Copie et téléchargement du brief disponibles après préparation. Un envoi direct nécessiterait un service d’e-mail, sa configuration et un traitement adapté des données.

## Avant publication

La prévisualisation porte `noindex,nofollow` et `robots.txt: Disallow /`. Pour publier : compléter les informations légales et les politiques applicables, valider la signature textuelle associée au symbole officiel, confirmer les rôles/crédits des projets, choisir le domaine canonique et l’hébergement, puis retirer volontairement ces directives et ajouter sitemap/URL absolues Open Graph. Les résultats de SEO, GEO ou Ads ne sont pas garantis.

Les textures vidéo LANDOR n’ont pas été redistribuées. La matière du hero ECOSPHEARE est originale. Les droits des marques et images clients restent ceux de leurs propriétaires.


Animation du hero : film Gemini, raccord sur le symbole original, boucle de 15,96 secondes et commande de pause. Documentation : [MOTION.md](docs/MOTION.md).

Direction active du 12 octobre : [comparaison et refonte LANDOR](docs/REFONTE-LANDOR.md). Signature monumentale, panneau d’introduction blanc, film de marque, carrousel grand format et manifeste. La navigation et les pages intérieures ont également été recomposées.
