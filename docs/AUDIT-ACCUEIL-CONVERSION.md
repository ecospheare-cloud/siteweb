# Audit sévère de l’accueil ECOSPHEARE

12 octobre 2026. Périmètre : accueil local avant/après, contenu, conversion, compréhension, preuve, accessibilité des nouveaux modules. Évaluation heuristique ; aucune donnée d’audience, aucun test utilisateur ni taux de conversion réel disponible. Les priorités ci-dessous sont un jugement de design, pas des mesures commerciales.

## Diagnostic

La version initiale présentait une forte signature, un film, un diaporama de projets, un manifeste, trois colonnes d’expertises et une seconde déclaration de marque. Elle offrait une bonne présence visuelle mais laissait le prospect faire lui-même le lien entre les services et son problème. L’univers de marque prenait plus de place que l’explication du travail.

La faiblesse la plus importante n’était pas le nombre de sections : c’était l’absence de réponse concrète à « que faites-vous pour moi, comment et avec quelle preuve ? ». Ajouter simplement des images aurait amplifié ce défaut.

## Lacunes, sévérité et correction

| Priorité | Observation vérifiée dans l’accueil initial | Conséquence probable | Correction livrée |
|---|---|---|---|
| P0 | L’introduction se limitait à « L’acquisition digitale. Création. Visibilité. Conversion. » | Le visiteur doit déduire la prestation et sa finalité | Promesse orientée client, phrase explicite sur cinq expertises, CTA direct |
| P0 | Aucun processus opérationnel sur l’accueil | Impossible d’anticiper la collaboration et les livrables | Quatre étapes : cadrer, construire, lancer, améliorer ; sortie concrète à chaque étape |
| P0 | Aucun indicateur ni distinction trafic/prospect/vente | Le discours « convertir » reste abstrait | Trois familles de mesure et limites de l’attribution |
| P0 | Images de projets et crédit QICS, sans contexte de preuve commerciale | Risque d’assimiler qualité visuelle et performance marketing | Introduction du portfolio, nature des réalisations et limites explicites ; aucune métrique inventée |
| P1 | Services groupés sous trois mots génériques | SEO, GEO, Ads, sites et CRM peuvent paraître interchangeables | Trois chapitres métier, mécanismes, livrables et liens vers les cinq pages de service |
| P1 | Aucun raccourci selon le problème du prospect | Lecture linéaire longue pour trouver son besoin | Trois ancres utiles dès l’introduction |
| P1 | Pas de réponse aux objections sur l’accueil | Incertitude sur refonte obligatoire, budget, délais, compatibilité | Cinq questions avec disclosures natifs |
| P1 | La prise de contact n’explique pas ce qu’il faut préparer | Effort perçu et contact peu qualifié | Section de préparation, champs existants conservés, fonctionnement e-mail annoncé |
| P1 | Deux manifestes de marque successifs dans le parcours global | Répétition de promesses générales | Second manifeste remplacé par processus, mesure et préparation du contact |
| P2 | Pas de grammaire d’infographie réutilisable | Illustrations futures incohérentes ou purement décoratives | Série « Lumière utile », manifeste de paramètres, prompts, masters, dérivés, composant |

## Architecture livrée

1. Hero liquide et signature monumentale conservés.
2. Introduction orientée client, accès au contact et navigation par besoin.
3. Film d’identité conservé à la demande antérieure du client.
4. Projets sélectionnés avec contexte et attribution QICS.
5. Manifeste bleu, conservé comme respiration de marque.
6. Acquisition : visibilité organique, moteurs de réponse, publicité ; lentille convergente.
7. Conversion : offre, réassurance, prise de contact ; trois portiques lumineux.
8. Suivi : centralisation, qualification, prochaines actions ; canaux structurés.
9. Méthode : quatre étapes et livrables associés ; infographie HTML native.
10. Mesure : demandes pertinentes, conversion, suivi commercial ; circuit optique.
11. FAQ : refonte, choix du levier, budget/délais, outils, premier échange.
12. Point de départ et contact, puis footer existant.

Le parcours garde la composition éditoriale demandée. Le film et le manifeste occupent encore une place importante avant les explications : c’est un arbitrage de marque, pas une optimisation de conversion démontrée. Les ancres rendent les explications accessibles immédiatement. Un futur test pourrait comparer cette version à une version où le film passe après la méthode.

## Preuve : ce qui existe et ce qui manque encore

Disponibles : visuels QICS, dossiers de projets et déclaration de collaboration par ECOSPHEARE. Ils permettent de montrer des réalisations. Ils ne permettent pas d’attribuer une hausse de ventes à ECOSPHEARE.

Manquent : rôle exact sur chaque mission, dates, objectif initial, dispositif, point de départ, méthode de mesure, résultats attribuables et autorisation de publication des chiffres/témoignages. La page ne fabrique aucun de ces éléments. Pas de mur de logos présenté comme une liste de clients directs, pas de ROAS, pas de taux de conversion inventé.

Pour transformer un projet en cas de performance, documenter : situation → périmètre ECOSPHEARE/QICS → actions → période → indicateur et source → résultat → limites d’attribution. Un tableau de bord généré ne peut pas servir de preuve.

## Système visuel et règles techniques

Quatre images raster originales générées avec Imagegen intégré. Métaphores optiques, bleu `#0e1adf`, verre, lumière blanche, signal jaune `#ecfd01`. Les textes et séquences sont du HTML : lisibles, sélectionnables, traduisibles, réorganisables sur mobile. L’image peut échouer sans faire disparaître l’explication. Les objets ne représentent pas une simulation scientifique.

Composants : `art()` partagé, `acquisitionSteps`, `mechanisms()`, `method()`, `measurement()`, `reassurance()`. Données éditoriales et rendu dans `content/home-conversion.mjs`. Styles isolés dans `public/conversion.css`, chargé seulement sur l’accueil. Aucun paquet runtime ajouté, aucune requête API ni génération côté visiteur.

Desktop : chapitres sur deux colonnes, texte ~44 % / image ~56 %, alternance visuelle ; ordre DOM texte puis image. Mobile ≤767 px : une colonne, même ordre de lecture. Méthode quatre colonnes, deux à ≤1023 px, chronologie verticale à ≤767 px. Figures 3:2 non recadrées ; légendes sous l’image, jamais sur les reflets.

Les nouvelles sections n’ajoutent aucune animation. Les ancres utilisent le scroll natif existant, les FAQ fonctionnent sans JS, le mouvement réduit existant reste respecté. Les styles d’état et les contrôles vidéo/carrousel existants sont préservés.

## Audit d’accessibilité et limites

Revue selon Web Interface Guidelines : https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md

- `public/conversion.css` : héritage gris de `figcaption` détecté visuellement puis corrigé en blanc sur bleu.
- `content/home-conversion.mjs` : légendes sémantiques et texte voisin donnent le sens ; images décoratives `alt=""`, dimensions et lazy loading.
- `scripts/check.mjs` : le validateur traitait `srcset` comme une URL unique ; correction pour vérifier chaque candidat responsive.
- Focus visible bleu sur clair, blanc/jaune sur bleu ; ancres sous le header fixe ; FAQ native clavier.
- Le site reste une prévisualisation `noindex`. Le formulaire prépare un e-mail, sans envoi serveur. Aucun suivi statistique installé.

Ces contrôles ne constituent pas une certification WCAG, ni un score Lighthouse, ni une validation de performance en production. Voir `docs/conversion/CONTROLES.md` pour les observations de la version livrée.
