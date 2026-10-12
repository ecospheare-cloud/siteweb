# Déploiement ECOSPHEARE

Mise en ligne le 12 octobre 2026 sur https://ecospheare.qics.fr/.

- Hébergement : Cloudflare Workers Static Assets, application `ecospheare`.
- Domaine personnalisé : `ecospheare.qics.fr`, environnement Production, zone `qics.fr`.
- Adresse technique : https://ecospheare.systeme-qics-agency.workers.dev/.
- Source déployée : commit `552acb386baaf9fc7233576cb545f5fe78c72720`, branche `codex/ecospheare-site`.
- Déploiement Cloudflare affiché Ready à 100 %, version courte `d840a892`.
- 82 fichiers, environ 9 Mo, transférés depuis une archive du contenu de `dist/` (index.html à la racine).
- Aucun changement au serveur Nginx du site principal qics.fr.

## Contrôles

Domaine ouvert dans le navigateur en HTTPS, site rendu et aucune erreur console capturée. DNS public Cloudflare résolu. Les 19 pages HTML et quatre ressources clés (CSS, JS et film) sont identiques octet pour octet au build local : voir `verification.json`. Le contrôle HTTP utilise l'adresse résolue par 1.1.1.1 avec validation du certificat TLS, car le résolveur système conservait temporairement une réponse DNS négative. Aucun contournement de validation TLS.

## Prochaine publication

Le déploiement actuel est manuel, sans intégration GitHub automatique. Après modification : `npm run build`, `npm run check`, puis archiver le contenu de `dist/` et l'importer via Workers & Pages → ecospheare → New deployment. Le dépôt contient la source complète, les assets et les scripts de construction, pas les fichiers générés de dist.

Cette mise en ligne conserve exactement la version demandée, y compris `noindex,nofollow` et le robots.txt de prévisualisation. Elle est publiquement consultable mais ne demande pas l'indexation Google. Le formulaire prépare un e-mail et n'utilise pas de backend d'envoi. Les informations juridiques finales restent à compléter dans la page Confidentialité.
