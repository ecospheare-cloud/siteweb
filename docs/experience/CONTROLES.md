# Contrôles de la refonte Prisme

12 octobre 2026.

- Build : 19 pages générées.
- Vérification statique : 631 références internes/ressources, 59 images avec attributs alt et dimensions, un h1 par page, IDs uniques, formulaires étiquetés.
- Contrastes calculés : texte secondaire sur surface pâle 5,81:1 ; bleu sur glacier 7,48:1 ; encre sur toile 15,49:1 ; blanc sur cobalt 9,41:1. Ce contrôle ne certifie pas tous les pixels des médias animés.
- `check-motion.mjs` : réduction initiale, changement de préférence, pause/reprise, hors écran et onglet masqué du film.
- `check-portfolio.mjs` : passage automatique, temps restant après pause, reprise, onglet masqué, fenêtre ouverte, hors écran, navigation manuelle sous reduced-motion. Tests avec horloge et DOM simulés ; contrôle visuel complémentaire dans le navigateur.
- Desktop 1280 × 720 : barre de progression active et passage automatique observés ; pause via le bouton, état « Lecture » ; ouverture du guide, choix Conversion, focus sur le titre du résultat ; fermeture Échap et retour au bouton d'origine. Aucun débordement horizontal sur le relevé.
- Mobile 390 × 844 : hero, navigation et CTA visibles ; menu ouvert et refermé par Échap ; guide lisible ; agrandissement d'infographie avec le bon titre, sans débordement interne.
- Mobile 320 × 740 : parcours guide → suivi → contact, select `web-apps` correctement prérempli ; pas d'envoi du formulaire ; aucun débordement sur la page contact. Après stabilisation du changement de viewport, accueil et portfolio : scrollWidth = innerWidth = 320. Un dépassement transitoire relevé immédiatement au redimensionnement a disparu au recalcul de mise en page ; il n'a pas été masqué artificiellement avec overflow-x sur body.
- Console du parcours mobile : aucune erreur ni alerte capturée.
- `git diff --check` : réussi.

Captures : `portfolio-desktop.png`, `guide-mobile.png`. Les vues sont des preuves du rendu, pas une mesure de fluidité. Pas de téléphone physique, Safari, lecteur d'écran complet, score Lighthouse ou mesure de conversion dans cette passe. Le formulaire reste un générateur de mailto. Les recommandations du guide sont des orientations éditoriales, pas un moteur d'audit automatisé.
