# LANDOR — Inventaire détaillé des 46 routes anglaises

**Relevé du 12 octobre 2026.** Annexe de la [spécification des interactions](AUDIT-LANDOR-INTERACTIONS.md).

Les 38 fiches projets et les quatre pages institutionnelles ont été ouvertes dans le navigateur. Les quatre routes principales sont documentées dans le rapport principal. Les séquences ci-dessous proviennent du JSON public intégré à chaque page ; elles décrivent la structure, sans redistribuer les textes ou médias LANDOR.

## 1. Les quatre routes principales

| Route | Gabarit | Interactions auditées |
|---|---|---|
| [Accueil](https://landor.com/) | heroBanner → caseStudies → aboutBlock | Scroll, pinning, showreel, menu, carrousel déclaré |
| [Catalogue](https://landor.com/en/our-work/) | caseStudiesListing | Scroll, grille responsive, lien de fiche, retour |
| [Contact](https://landor.com/en/contact-us/) | locateUs → contactForm | Recherche 1/0 résultat, sélecteur, mobile sans carte |
| [Recrutement](https://landor.com/en/join-us/) | jobsList | Filtre Creative 61→24, mobile, menu/langues |

## 2. Légende des modules

| Code | Module | Contrat du rapport |
|---|---|---|
| H | Hero image plein écran, épinglé | P02 |
| T | Grande introduction éditoriale | P04 |
| V | Vidéo avec poster et commandes | P06 |
| I | Image simple | P05 |
| D | Deux images | P05 |
| TR | Trois images, 1 à gauche / 2 à droite | P05 |
| TRM | Trois images, 2 à gauche / 1 à droite | P05 |
| R | Récit / équipe | P07 |

Breadcrumb fixe commun P03. Le CMS ajoute un header et un footer de fiche ; ils ne sont pas à traiter comme des sections rendues. Le « nextItem » est indiqué ci-dessous comme donnée CMS, pas comme lien forcément visible. Les comptes I/D/TR excluent le hero et les posters vidéo.

## 3. Tableau comparatif des 38 fiches

| Fiche | Images simples | Vidéos | Diptyques | Triptyques | Hauteur desktop relevée |
|---|---:|---:|---:|---:|---:|
| [SCANA Energy](https://landor.com/en/our-work/scana-energy/) | 4 | 11 | 0 | 0 | 14608 px |
| [Saudia](https://landor.com/en/our-work/saudia/) | 6 | 6 | 1 | 0 | 12909 px |
| [Reykjavik Global Forum](https://landor.com/en/our-work/reykjavik-global-forum/) | 5 | 4 | 2 | 0 | 11717 px |
| [Volkswagen Group](https://landor.com/en/our-work/volkswagen-group/) | 7 | 5 | 0 | 0 | 11852 px |
| [iz](https://landor.com/en/our-work/iz/) | 4 | 5 | 2 | 0 | 12210 px |
| [Misura](https://landor.com/en/our-work/misura/) | 1 | 5 | 4 | 0 | 11577 px |
| [New York Golf Club](https://landor.com/en/our-work/new-york-golf-club/) | 4 | 3 | 2 | 0 | 10202 px |
| [Imperia](https://landor.com/en/our-work/imperia/) | 5 | 5 | 2 | 0 | 12329 px |
| [Syensqo](https://landor.com/en/our-work/syensqo/) | 5 | 2 | 0 | 2 | 10855 px |
| [Opella](https://landor.com/en/our-work/opella/) | 9 | 1 | 0 | 0 | 10031 px |
| [Orchestre De Chambre de Paris](https://landor.com/en/our-work/orchestre-de-chambre-de-paris/) | 3 | 4 | 3 | 0 | 10929 px |
| [Kellogg's](https://landor.com/en/our-work/kelloggs/) | 9 | 7 | 1 | 0 | 16418 px |
| [Lobos 1707](https://landor.com/en/our-work/lobos-1707/) | 6 | 2 | 2 | 0 | 11072 px |
| [BANCOMAT](https://landor.com/en/our-work/bancomat/) | 3 | 9 | 1 | 0 | 12609 px |
| [Milan Symphony Orchestra](https://landor.com/en/our-work/milan-symphony-orchestra/) | 3 | 7 | 2 | 0 | 12681 px |
| [Topo Chico](https://landor.com/en/our-work/topo-chico/) | 8 | 2 | 0 | 1 | 11818 px |
| [Nike Kids](https://landor.com/en/our-work/nike-kids/) | 6 | 0 | 4 | 0 | 11097 px |
| [Renault](https://landor.com/en/our-work/renault/) | 3 | 2 | 1 | 0 | 7497 px |
| [{access}ories](https://landor.com/en/our-work/access-ories/) | 5 | 1 | 1 | 0 | 8160 px |
| [LeShuttle](https://landor.com/en/our-work/leshuttle/) | 8 | 5 | 2 | 1 | 15948 px |
| [M&M'S](https://landor.com/en/our-work/mms/) | 6 | 1 | 3 | 0 | 11152 px |
| [Saudia Airlines](https://landor.com/en/our-work/saudia-airlines/) | 8 | 1 | 1 | 0 | 11549 px |
| [IUCN/SOS](https://landor.com/en/our-work/iucnsos/) | 8 | 2 | 1 | 0 | 11587 px |
| [Lynk & Co](https://landor.com/en/our-work/lynk-co/) | 8 | 1 | 1 | 0 | 10701 px |
| [bp](https://landor.com/en/our-work/bp/) | 7 | 0 | 1 | 0 | 8745 px |
| [Walmart](https://landor.com/en/our-work/walmart/) | 5 | 3 | 0 | 0 | 8929 px |
| [A&O Shearman](https://landor.com/en/our-work/ao-shearman/) | 10 | 1 | 0 | 0 | 10723 px |
| [Elica](https://landor.com/en/our-work/elica/) | 7 | 7 | 0 | 0 | 13112 px |
| [TATA.ev](https://landor.com/en/our-work/tataev/) | 7 | 6 | 0 | 2 | 14251 px |
| [Burson](https://landor.com/en/our-work/burson/) | 6 | 2 | 1 | 1 | 10855 px |
| [Huawei](https://landor.com/en/our-work/huawei/) | 5 | 1 | 0 | 1 | 8451 px |
| [Team Global Express](https://landor.com/en/our-work/team-global-express/) | 11 | 1 | 0 | 0 | 11613 px |
| [MYOM](https://landor.com/en/our-work/myom/) | 6 | 4 | 0 | 0 | 10173 px |
| [West Loop](https://landor.com/en/our-work/west-loop/) | 5 | 4 | 1 | 2 | 12814 px |
| [KitKat](https://landor.com/en/our-work/kitkat/) | 4 | 5 | 1 | 0 | 10509 px |
| [AO](https://landor.com/en/our-work/ao/) | 10 | 0 | 0 | 1 | 10837 px |
| [nib](https://landor.com/en/our-work/nib/) | 7 | 3 | 0 | 0 | 10353 px |
| [QT](https://landor.com/en/our-work/qt/) | 2 | 5 | 0 | 1 | 8706 px |

Les hauteurs sont des mesures de document à 1280×720, après navigation et scroll vers le bas. Elles incluent le footer global et les réservations de pin. Elles ne constituent pas un objectif fixe pour des textes ECOSPHEARE différents.

## 4. Fiche technique individuelle

### SCANA Energy

Source : [https://landor.com/en/our-work/scana-energy/](https://landor.com/en/our-work/scana-energy/).

**Ordre du corps :** H → T → V ×9 → I ×2 → V ×2 → I ×2 → R.

**Donnée de prochain cas :** Saudia (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 1920×1080 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | V | placeholder : 1920×1080 · ratio 1.778 |
| 5 | V | placeholder : 1920×1080 · ratio 1.778 |
| 6 | V | placeholder : 1920×1080 · ratio 1.778 |
| 7 | V | placeholder : 1920×1080 · ratio 1.778 |
| 8 | V | placeholder : 1920×1080 · ratio 1.778 |
| 9 | V | placeholder : 1920×1080 · ratio 1.778 |
| 10 | V | placeholder : 1920×1080 · ratio 1.778 |
| 11 | V | placeholder : 1920×1080 · ratio 1.778 |
| 12 | V | placeholder : 1920×1080 · ratio 1.778 |
| 13 | I | image : 1920×1080 · ratio 1.778 |
| 14 | I | image : 1920×1080 · ratio 1.778 |
| 15 | V | placeholder : 3840×2160 · ratio 1.778 |
| 16 | V | placeholder : 3840×2160 · ratio 1.778 |
| 17 | I | image : 1920×1080 · ratio 1.778 |
| 18 | I | image : 1920×1080 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Saudia

Source : [https://landor.com/en/our-work/saudia/](https://landor.com/en/our-work/saudia/).

**Ordre du corps :** H → T → V → I → V → I ×3 → V → I → V → D → V → I → V → R.

**Donnée de prochain cas :** Reykjavik Global Forum (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3706×2085 · ratio 1.777 ; mobileImage : 1440×2560 · ratio 0.562 |
| 4 | V | placeholder : 1920×1080 · ratio 1.778 |
| 5 | I | image : 2638×1483 · ratio 1.779 |
| 6 | V | placeholder : 1920×1080 · ratio 1.778 |
| 7 | I | image : 3706×2085 · ratio 1.777 |
| 8 | I | image : 3680×2070 · ratio 1.778 |
| 9 | I | image : 3681×2070 · ratio 1.778 |
| 10 | V | placeholder : 1920×1080 · ratio 1.778 |
| 11 | I | image : 4099×2305 · ratio 1.778 |
| 12 | V | placeholder : 1920×1080 · ratio 1.778 |
| 13 | D | image : 1080×1620 · ratio 0.667 ; image : 1080×1620 · ratio 0.667 |
| 14 | V | placeholder : 1920×1080 · ratio 1.778 |
| 15 | I | image : 3706×2085 · ratio 1.777 |
| 16 | V | placeholder : 1920×1080 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Reykjavik Global Forum

Source : [https://landor.com/en/our-work/reykjavik-global-forum/](https://landor.com/en/our-work/reykjavik-global-forum/).

**Ordre du corps :** H → T → I ×2 → D → I → V ×2 → D → I ×2 → V ×2 → R.

**Donnée de prochain cas :** Volkswagen Group (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | I | image : 3840×2160 · ratio 1.778 |
| 5 | I | image : 3840×2160 · ratio 1.778 |
| 6 | D | image : 1920×2880 · ratio 0.667 ; image : 1920×2880 · ratio 0.667 |
| 7 | I | image : 3840×2160 · ratio 1.778 |
| 8 | V | placeholder : 3840×2160 · ratio 1.778 |
| 9 | V | placeholder : 3840×2160 · ratio 1.778 |
| 10 | D | image : 1920×2880 · ratio 0.667 ; image : 1920×2880 · ratio 0.667 |
| 11 | I | image : 3840×2160 · ratio 1.778 |
| 12 | I | image : 3840×2160 · ratio 1.778 |
| 13 | V | placeholder : 3840×2160 · ratio 1.778 |
| 14 | V | placeholder : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Volkswagen Group

Source : [https://landor.com/en/our-work/volkswagen-group/](https://landor.com/en/our-work/volkswagen-group/).

**Ordre du corps :** H → T → V → I → V → I → V → I ×4 → V → I → V → R.

**Donnée de prochain cas :** iz  (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | V | placeholder : 3840×2160 · ratio 1.778 |
| 5 | I | image : 3840×2160 · ratio 1.778 |
| 6 | V | placeholder : 3840×2160 · ratio 1.778 |
| 7 | I | image : 3840×2160 · ratio 1.778 |
| 8 | V | placeholder : 3840×2160 · ratio 1.778 |
| 9 | I | image : 3840×2160 · ratio 1.778 |
| 10 | I | image : 3840×2160 · ratio 1.778 |
| 11 | I | image : 3840×2160 · ratio 1.778 |
| 12 | I | image : 3840×2160 · ratio 1.778 |
| 13 | V | placeholder : 3840×2160 · ratio 1.778 |
| 14 | I | image : 3840×2160 · ratio 1.778 |
| 15 | V | placeholder : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### iz

Source : [https://landor.com/en/our-work/iz/](https://landor.com/en/our-work/iz/).

**Ordre du corps :** H → T → V ×2 → I → V → I → D → I → V ×2 → D → I → R.

**Donnée de prochain cas :** Misura (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | V | placeholder : 8000×4500 · ratio 1.778 |
| 5 | V | placeholder : 3840×2160 · ratio 1.778 |
| 6 | I | image : 3840×2160 · ratio 1.778 |
| 7 | V | placeholder : 3840×2160 · ratio 1.778 |
| 8 | I | image : 3840×2160 · ratio 1.778 |
| 9 | D | image : 2160×3840 · ratio 0.562 ; image : 2160×3840 · ratio 0.562 |
| 10 | I | image : 3840×2160 · ratio 1.778 |
| 11 | V | placeholder : 3840×2160 · ratio 1.778 |
| 12 | V | placeholder : 3840×2160 · ratio 1.778 |
| 13 | D | image : 2160×3840 · ratio 0.562 ; image : 2160×3840 · ratio 0.562 |
| 14 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Misura

Source : [https://landor.com/en/our-work/misura/](https://landor.com/en/our-work/misura/).

**Ordre du corps :** H → T → D → V → D → V → D → I → V ×2 → D → V → R.

**Donnée de prochain cas :** New York Golf Club (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | D | image : 1920×2880 · ratio 0.667 ; image : 1920×2880 · ratio 0.667 |
| 5 | V | placeholder : 1920×1080 · ratio 1.778 |
| 6 | D | image : 1920×2881 · ratio 0.666 ; image : 1920×2881 · ratio 0.666 |
| 7 | V | placeholder : 3840×2161 · ratio 1.777 |
| 8 | D | image : 1920×2881 · ratio 0.666 ; image : 1920×2881 · ratio 0.666 |
| 9 | I | image : 3840×2560 · ratio 1.500 |
| 10 | V | placeholder : 3840×2161 · ratio 1.777 |
| 11 | V | placeholder : 1920×1080 · ratio 1.778 |
| 12 | D | image : 1920×2881 · ratio 0.666 ; image : 1920×2881 · ratio 0.666 |
| 13 | V | placeholder : 3840×2161 · ratio 1.777 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### New York Golf Club

Source : [https://landor.com/en/our-work/new-york-golf-club/](https://landor.com/en/our-work/new-york-golf-club/).

**Ordre du corps :** H → T → V ×2 → I → D → I ×2 → D → I → V → R.

**Donnée de prochain cas :** Imperia (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | V | placeholder : 3840×2160 · ratio 1.778 |
| 5 | V | placeholder : 3840×2160 · ratio 1.778 |
| 6 | I | image : 3840×2160 · ratio 1.778 |
| 7 | D | image : 1920×2880 · ratio 0.667 ; image : 1920×2880 · ratio 0.667 |
| 8 | I | image : 3840×2560 · ratio 1.500 |
| 9 | I | image : 3840×2560 · ratio 1.500 |
| 10 | D | image : 1920×2880 · ratio 0.667 ; image : 960×1440 · ratio 0.667 |
| 11 | I | image : 3840×2560 · ratio 1.500 |
| 12 | V | placeholder : 1920×1080 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Imperia

Source : [https://landor.com/en/our-work/imperia/](https://landor.com/en/our-work/imperia/).

**Ordre du corps :** H → T → I ×2 → V → D → I → V ×2 → I → D → V ×2 → I → R.

**Donnée de prochain cas :** Syensqo (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 4 | I | image : 3840×2160 · ratio 1.778 |
| 5 | I | image : 3840×2160 · ratio 1.778 |
| 6 | V | placeholder : 3840×2160 · ratio 1.778 |
| 7 | D | image : 2160×3840 · ratio 0.562 ; image : 2160×3840 · ratio 0.562 |
| 8 | I | image : 3840×2160 · ratio 1.778 |
| 9 | V | placeholder : 3840×2160 · ratio 1.778 |
| 10 | V | placeholder : 3840×2160 · ratio 1.778 |
| 11 | I | image : 3840×2160 · ratio 1.778 |
| 12 | D | image : 2160×3840 · ratio 0.562 ; image : 2160×3840 · ratio 0.562 |
| 13 | V | placeholder : 3840×2160 · ratio 1.778 |
| 14 | V | placeholder : 3840×2160 · ratio 1.778 |
| 15 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Syensqo

Source : [https://landor.com/en/our-work/syensqo/](https://landor.com/en/our-work/syensqo/).

**Ordre du corps :** H → T → V → I → V → I ×2 → TRM → I → TRM → I → R.

**Donnée de prochain cas :** Opella (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | V | placeholder : 3840×2160 · ratio 1.778 |
| 5 | I | image : 3840×2560 · ratio 1.500 |
| 6 | V | placeholder : 3840×2160 · ratio 1.778 |
| 7 | I | image : 3840×2160 · ratio 1.778 |
| 8 | I | image : 3840×2560 · ratio 1.500 |
| 9 | TRM | image : 1920×1280 · ratio 1.500 ; image : 1920×1280 · ratio 1.500 ; image : 1920×2880 · ratio 0.667 |
| 10 | I | image : 3840×2560 · ratio 1.500 |
| 11 | TRM | image : 1920×1280 · ratio 1.500 ; image : 1920×1280 · ratio 1.500 ; image : 8434×14999 · ratio 0.562 |
| 12 | I | image : 3840×2560 · ratio 1.500 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Opella

Source : [https://landor.com/en/our-work/opella/](https://landor.com/en/our-work/opella/).

**Ordre du corps :** H → T → I ×9 → V → R.

**Donnée de prochain cas :** Orchestre De Chambre de Paris (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | I | image : 3840×2160 · ratio 1.778 |
| 5 | I | image : 3840×2160 · ratio 1.778 |
| 6 | I | image : 3840×2160 · ratio 1.778 |
| 7 | I | image : 3840×2160 · ratio 1.778 |
| 8 | I | image : 3840×2160 · ratio 1.778 |
| 9 | I | image : 3840×2160 · ratio 1.778 |
| 10 | I | image : 3840×2160 · ratio 1.778 |
| 11 | I | image : 3840×2160 · ratio 1.778 |
| 12 | I | image : 3840×2160 · ratio 1.778 |
| 13 | V | placeholder : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Orchestre De Chambre de Paris

Source : [https://landor.com/en/our-work/orchestre-de-chambre-de-paris/](https://landor.com/en/our-work/orchestre-de-chambre-de-paris/).

**Ordre du corps :** H → T → V → I ×2 → V → D → I → V → D ×2 → V → R.

**Donnée de prochain cas :** Kellogg's (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | V | placeholder : 1920×1080 · ratio 1.778 |
| 5 | I | image : 3840×2160 · ratio 1.778 |
| 6 | I | image : 3840×2160 · ratio 1.778 |
| 7 | V | placeholder : 1920×1080 · ratio 1.778 |
| 8 | D | image : 1920×2880 · ratio 0.667 ; image : 1920×2880 · ratio 0.667 |
| 9 | I | image : 3840×2160 · ratio 1.778 |
| 10 | V | placeholder : 1920×1080 · ratio 1.778 |
| 11 | D | image : 1920×2880 · ratio 0.667 ; image : 1920×2880 · ratio 0.667 |
| 12 | D | image : 1920×2880 · ratio 0.667 ; image : 1920×2880 · ratio 0.667 |
| 13 | V | placeholder : 1920×1080 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Kellogg's

Source : [https://landor.com/en/our-work/kelloggs/](https://landor.com/en/our-work/kelloggs/).

**Ordre du corps :** H → T → I ×2 → V → I → D → V → I ×3 → V ×2 → I → V ×2 → I ×2 → V → R.

**Donnée de prochain cas :** Lobos 1707 (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 4 | I | image : 3840×2160 · ratio 1.778 |
| 5 | I | image : 3840×2160 · ratio 1.778 |
| 6 | V | placeholder : 3840×2160 · ratio 1.778 |
| 7 | I | image : 3840×2160 · ratio 1.778 |
| 8 | D | image : 2160×3840 · ratio 0.562 ; image : 2160×3840 · ratio 0.562 |
| 9 | V | placeholder : 3840×2160 · ratio 1.778 |
| 10 | I | image : 3840×2160 · ratio 1.778 |
| 11 | I | image : 3840×2160 · ratio 1.778 |
| 12 | I | image : 3840×2160 · ratio 1.778 |
| 13 | V | placeholder : 3840×2160 · ratio 1.778 |
| 14 | V | placeholder : 3840×2160 · ratio 1.778 |
| 15 | I | image : 3840×2160 · ratio 1.778 |
| 16 | V | placeholder : 1920×1080 · ratio 1.778 |
| 17 | V | placeholder : 3840×2160 · ratio 1.778 |
| 18 | I | image : 3840×2160 · ratio 1.778 |
| 19 | I | image : 3840×2160 · ratio 1.778 |
| 20 | V | placeholder : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Lobos 1707

Source : [https://landor.com/en/our-work/lobos-1707/](https://landor.com/en/our-work/lobos-1707/).

**Ordre du corps :** H → T → I → V → D → I ×3 → V → D → I ×2 → R.

**Donnée de prochain cas :** BANCOMAT (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 4 | I | image : 3840×2160 · ratio 1.778 |
| 5 | V | placeholder : 3840×2160 · ratio 1.778 |
| 6 | D | image : 2160×3840 · ratio 0.562 ; image : 2160×3840 · ratio 0.562 |
| 7 | I | image : 3840×2160 · ratio 1.778 |
| 8 | I | image : 3840×2160 · ratio 1.778 |
| 9 | I | image : 3840×2160 · ratio 1.778 |
| 10 | V | placeholder : 3840×2160 · ratio 1.778 |
| 11 | D | image : 2160×3840 · ratio 0.562 ; image : 2160×3840 · ratio 0.562 |
| 12 | I | image : 3840×2160 · ratio 1.778 |
| 13 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### BANCOMAT

Source : [https://landor.com/en/our-work/bancomat/](https://landor.com/en/our-work/bancomat/).

**Ordre du corps :** H → T → V ×3 → I → V → D → V ×2 → I → V → I → V ×2 → R.

**Donnée de prochain cas :** Milan Symphony Orchestra (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 4 | V | placeholder : 3840×2160 · ratio 1.778 |
| 5 | V | placeholder : 3840×2160 · ratio 1.778 |
| 6 | V | placeholder : 3840×2160 · ratio 1.778 |
| 7 | I | image : 3840×2160 · ratio 1.778 |
| 8 | V | placeholder : 3840×2160 · ratio 1.778 |
| 9 | D | image : 2160×3840 · ratio 0.562 ; image : 2160×3840 · ratio 0.562 |
| 10 | V | placeholder : 3840×2160 · ratio 1.778 |
| 11 | V | placeholder : 3840×2160 · ratio 1.778 |
| 12 | I | image : 3840×2160 · ratio 1.778 |
| 13 | V | placeholder : 3840×2160 · ratio 1.778 |
| 14 | I | image : 3840×2160 · ratio 1.778 |
| 15 | V | placeholder : 3840×2160 · ratio 1.778 |
| 16 | V | placeholder : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Milan Symphony Orchestra

Source : [https://landor.com/en/our-work/milan-symphony-orchestra/](https://landor.com/en/our-work/milan-symphony-orchestra/).

**Ordre du corps :** H → T → V → I → V ×4 → D → I → V → D → V → I → R.

**Donnée de prochain cas :** Topo Chico (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 4 | V | placeholder : 1704×959 · ratio 1.777 |
| 5 | I | image : 3840×2160 · ratio 1.778 |
| 6 | V | placeholder : 1704×959 · ratio 1.777 |
| 7 | V | placeholder : 1704×959 · ratio 1.777 |
| 8 | V | placeholder : 1704×959 · ratio 1.777 |
| 9 | V | placeholder : 1704×959 · ratio 1.777 |
| 10 | D | image : 2160×3840 · ratio 0.562 ; image : 2160×3840 · ratio 0.562 |
| 11 | I | image : 3840×2160 · ratio 1.778 |
| 12 | V | placeholder : 3840×2160 · ratio 1.778 |
| 13 | D | image : 2160×3840 · ratio 0.562 ; image : 2160×3840 · ratio 0.562 |
| 14 | V | placeholder : 1704×959 · ratio 1.777 |
| 15 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Topo Chico

Source : [https://landor.com/en/our-work/topo-chico/](https://landor.com/en/our-work/topo-chico/).

**Ordre du corps :** H → T → V → I ×5 → TR → I ×3 → V → R.

**Donnée de prochain cas :** Nike Kids (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | V | placeholder : 1920×1080 · ratio 1.778 |
| 5 | I | image : 3480×2320 · ratio 1.500 |
| 6 | I | image : 1920×1280 · ratio 1.500 |
| 7 | I | image : 1920×1080 · ratio 1.778 |
| 8 | I | image : 1920×1280 · ratio 1.500 |
| 9 | I | image : 3480×2320 · ratio 1.500 |
| 10 | TR | image : 1080×1620 · ratio 0.667 ; image : 1920×1280 · ratio 1.500 ; image : 1920×1280 · ratio 1.500 |
| 11 | I | image : 3000×1688 · ratio 1.777 |
| 12 | I | image : 1920×1280 · ratio 1.500 |
| 13 | I | image : 3480×2560 · ratio 1.359 |
| 14 | V | placeholder : 1920×1080 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Nike Kids

Source : [https://landor.com/en/our-work/nike-kids/](https://landor.com/en/our-work/nike-kids/).

**Ordre du corps :** H → T → D → I ×3 → D → I → D ×2 → I ×2 → R.

**Donnée de prochain cas :** Renault (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 1920×1080 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | D | image : 1080×1620 · ratio 0.667 ; image : 1080×1620 · ratio 0.667 |
| 5 | I | image : 1920×1280 · ratio 1.500 |
| 6 | I | image : 2400×1600 · ratio 1.500 |
| 7 | I | image : 1920×1280 · ratio 1.500 |
| 8 | D | image : 1080×1620 · ratio 0.667 ; image : 1080×1620 · ratio 0.667 |
| 9 | I | image : 1920×1080 · ratio 1.778 |
| 10 | D | image : 1080×1620 · ratio 0.667 ; image : 1080×1620 · ratio 0.667 |
| 11 | D | image : 1080×1620 · ratio 0.667 ; image : 1080×1620 · ratio 0.667 |
| 12 | I | image : 1920×1280 · ratio 1.500 |
| 13 | I | image : 1920×1280 · ratio 1.500 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Renault

Source : [https://landor.com/en/our-work/renault/](https://landor.com/en/our-work/renault/).

**Ordre du corps :** H → T → V → I ×3 → D → V → R.

**Donnée de prochain cas :** {access}ories (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 2100×1181 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | V | placeholder : 1920×1080 · ratio 1.778 |
| 5 | I | image : 1920×1080 · ratio 1.778 |
| 6 | I | image : 3000×1688 · ratio 1.777 |
| 7 | I | image : 1920×1280 · ratio 1.500 |
| 8 | D | image : 1080×1620 · ratio 0.667 ; image : 1080×1620 · ratio 0.667 |
| 9 | V | placeholder : 1920×1080 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### {access}ories

Source : [https://landor.com/en/our-work/access-ories/](https://landor.com/en/our-work/access-ories/).

**Ordre du corps :** H → T → I → D → I → V → I ×3 → R.

**Donnée de prochain cas :** LeShuttle (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 2160×3840 · ratio 0.562 |
| 4 | I | image : 3840×2160 · ratio 1.778 |
| 5 | D | image : 2160×3840 · ratio 0.562 ; image : 2160×3840 · ratio 0.562 |
| 6 | I | image : 3840×2160 · ratio 1.778 |
| 8 | I | image : 3840×2160 · ratio 1.778 |
| 9 | I | image : 3840×2160 · ratio 1.778 |
| 10 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### LeShuttle

Source : [https://landor.com/en/our-work/leshuttle/](https://landor.com/en/our-work/leshuttle/).

**Ordre du corps :** H → T → I → V → I ×2 → V → I ×4 → TR → V → I → D → V → D → V → R.

**Donnée de prochain cas :** M&M'S (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 1920×1080 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | I | image : 1920×1280 · ratio 1.500 |
| 5 | V | placeholder : ?×? |
| 6 | I | image : 1920×1080 · ratio 1.778 |
| 7 | I | image : 1920×1280 · ratio 1.500 |
| 8 | V | placeholder : ?×? |
| 9 | I | image : 1920×1280 · ratio 1.500 |
| 10 | I | image : 1920×1080 · ratio 1.778 |
| 11 | I | image : 1920×1280 · ratio 1.500 |
| 12 | I | image : 1920×1080 · ratio 1.778 |
| 13 | TR | image : 1080×1620 · ratio 0.667 ; image : 1920×1280 · ratio 1.500 ; image : 1920×1280 · ratio 1.500 |
| 14 | V | placeholder : ?×? |
| 15 | I | image : 1920×1280 · ratio 1.500 |
| 16 | D | image : 1080×1620 · ratio 0.667 ; image : 1080×1620 · ratio 0.667 |
| 17 | V | placeholder : ?×? |
| 18 | D | image : 1080×1620 · ratio 0.667 ; image : 1080×1620 · ratio 0.667 |
| 19 | V | placeholder : ?×? |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### M&M'S

Source : [https://landor.com/en/our-work/mms/](https://landor.com/en/our-work/mms/).

**Ordre du corps :** H → T → D → V → I ×2 → D → I ×2 → D → I ×2 → R.

**Donnée de prochain cas :** Saudia Airlines (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 1920×1080 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | D | image : 1080×1620 · ratio 0.667 ; image : 1080×1620 · ratio 0.667 |
| 6 | I | image : 1920×1280 · ratio 1.500 |
| 7 | I | image : 1920×1280 · ratio 1.500 |
| 8 | D | image : 1080×1620 · ratio 0.667 ; image : 1080×1620 · ratio 0.667 |
| 9 | I | image : 1920×1280 · ratio 1.500 |
| 10 | I | image : 1920×1280 · ratio 1.500 |
| 11 | D | image : 1080×1620 · ratio 0.667 ; image : 1080×1620 · ratio 0.667 |
| 12 | I | image : 1920×1280 · ratio 1.500 |
| 13 | I | image : 1920×1080 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Saudia Airlines

Source : [https://landor.com/en/our-work/saudia-airlines/](https://landor.com/en/our-work/saudia-airlines/).

**Ordre du corps :** H → T → I ×2 → D → I → V → I ×5 → R.

**Donnée de prochain cas :** IUCN/SOS (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 1920×1080 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | I | image : 1920×1080 · ratio 1.778 |
| 5 | I | image : 1920×1280 · ratio 1.500 |
| 6 | D | image : 1080×1620 · ratio 0.667 ; image : 1080×1620 · ratio 0.667 |
| 7 | I | image : 1920×1280 · ratio 1.500 |
| 8 | V | placeholder : ?×? |
| 9 | I | image : 1920×1280 · ratio 1.500 |
| 10 | I | image : 1920×1280 · ratio 1.500 |
| 11 | I | image : 1920×1280 · ratio 1.500 |
| 12 | I | image : 1920×1280 · ratio 1.500 |
| 13 | I | image : 1920×1280 · ratio 1.500 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### IUCN/SOS

Source : [https://landor.com/en/our-work/iucnsos/](https://landor.com/en/our-work/iucnsos/).

**Ordre du corps :** H → T → I ×2 → D → V → I → V → I ×5 → R.

**Donnée de prochain cas :** Lynk & Co  (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 1920×1080 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | I | image : 1920×1280 · ratio 1.500 |
| 5 | I | image : 1920×1280 · ratio 1.500 |
| 6 | D | image : 1080×1620 · ratio 0.667 ; image : 1080×1620 · ratio 0.667 |
| 7 | V | placeholder : ?×? |
| 8 | I | image : 1920×1080 · ratio 1.778 |
| 9 | V | placeholder : ?×? |
| 10 | I | image : 1920×1280 · ratio 1.500 |
| 11 | I | image : 3840×2560 · ratio 1.500 |
| 12 | I | image : 1920×1080 · ratio 1.778 |
| 13 | I | image : 1920×1280 · ratio 1.500 |
| 14 | I | image : 1920×1280 · ratio 1.500 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Lynk & Co

Source : [https://landor.com/en/our-work/lynk-co/](https://landor.com/en/our-work/lynk-co/).

**Ordre du corps :** H → T → I ×2 → D → I → V → I ×5 → R.

**Donnée de prochain cas :** bp (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 1920×1080 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | I | image : 1920×1080 · ratio 1.778 |
| 5 | I | image : 1920×1080 · ratio 1.778 |
| 6 | D | image : 1080×1620 · ratio 0.667 ; image : 1080×1620 · ratio 0.667 |
| 7 | I | image : 1920×1080 · ratio 1.778 |
| 9 | I | image : 1920×1280 · ratio 1.500 |
| 10 | I | image : 1920×1280 · ratio 1.500 |
| 11 | I | image : 1920×1280 · ratio 1.500 |
| 12 | I | image : 1920×1280 · ratio 1.500 |
| 13 | I | image : 1920×1080 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### bp

Source : [https://landor.com/en/our-work/bp/](https://landor.com/en/our-work/bp/).

**Ordre du corps :** H → T → I ×4 → D → I ×3 → R.

**Donnée de prochain cas :** Walmart (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 1920×1080 · ratio 1.778 ; mobileImage : ?×? |
| 4 | I | image : ?×? |
| 5 | I | image : ?×? |
| 6 | I | image : ?×? |
| 7 | I | image : ?×? |
| 8 | D | image : ?×? ; image : ?×? |
| 9 | I | image : ?×? |
| 10 | I | image : ?×? |
| 11 | I | image : 4000×2668 · ratio 1.499 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Walmart

Source : [https://landor.com/en/our-work/walmart/](https://landor.com/en/our-work/walmart/).

**Ordre du corps :** H → T → V → I ×2 → V → I ×2 → V → I → R.

**Donnée de prochain cas :** A&O Shearman (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 1920×1080 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | V | placeholder : 3840×2560 · ratio 1.500 |
| 5 | I | image : 1920×1280 · ratio 1.500 |
| 6 | I | image : 1920×1280 · ratio 1.500 |
| 7 | V | placeholder : 3840×2560 · ratio 1.500 |
| 8 | I | image : 1920×1280 · ratio 1.500 |
| 9 | I | image : 1920×1280 · ratio 1.500 |
| 10 | V | placeholder : 3840×2560 · ratio 1.500 |
| 11 | I | image : 1920×1280 · ratio 1.500 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### A&O Shearman

Source : [https://landor.com/en/our-work/ao-shearman/](https://landor.com/en/our-work/ao-shearman/).

**Ordre du corps :** H → T → V → I ×10 → R.

**Donnée de prochain cas :** Elica (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 533×800 · ratio 0.666 |
| 4 | V | placeholder : 3840×2160 · ratio 1.778 |
| 5 | I | image : 3840×2160 · ratio 1.778 |
| 6 | I | image : 3840×2160 · ratio 1.778 |
| 7 | I | image : 3840×2160 · ratio 1.778 |
| 8 | I | image : 3840×2160 · ratio 1.778 |
| 9 | I | image : 3840×2160 · ratio 1.778 |
| 10 | I | image : 3840×2160 · ratio 1.778 |
| 11 | I | image : 3840×2160 · ratio 1.778 |
| 12 | I | image : 3840×2160 · ratio 1.778 |
| 13 | I | image : 3840×2160 · ratio 1.778 |
| 14 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Elica

Source : [https://landor.com/en/our-work/elica/](https://landor.com/en/our-work/elica/).

**Ordre du corps :** H → T → V ×2 → I → V → I → V → I → V → I ×3 → V ×2 → I → R.

**Donnée de prochain cas :** TATA.ev (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 4 | V | placeholder : 3840×2160 · ratio 1.778 |
| 5 | V | placeholder : 3840×2160 · ratio 1.778 |
| 6 | I | image : 3840×2160 · ratio 1.778 |
| 7 | V | placeholder : 3840×2160 · ratio 1.778 |
| 8 | I | image : 3840×2160 · ratio 1.778 |
| 9 | V | placeholder : 3840×2160 · ratio 1.778 |
| 10 | I | image : 3840×2160 · ratio 1.778 |
| 11 | V | placeholder : 3840×2160 · ratio 1.778 |
| 12 | I | image : 3840×2160 · ratio 1.778 |
| 13 | I | image : 3840×2160 · ratio 1.778 |
| 14 | I | image : 3840×2160 · ratio 1.778 |
| 15 | V | placeholder : 3840×2160 · ratio 1.778 |
| 16 | V | placeholder : 3840×2160 · ratio 1.778 |
| 17 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### TATA.ev

Source : [https://landor.com/en/our-work/tataev/](https://landor.com/en/our-work/tataev/).

**Ordre du corps :** H → T → V → I ×2 → V → I → TR → V → I ×2 → V → TR → V → I → V → I → R.

**Donnée de prochain cas :** Burson (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 4 | V | placeholder : 3840×2160 · ratio 1.778 |
| 5 | I | image : 3840×2160 · ratio 1.778 |
| 6 | I | image : 3840×2160 · ratio 1.778 |
| 7 | V | placeholder : 3840×2160 · ratio 1.778 |
| 8 | I | image : 3840×2160 · ratio 1.778 |
| 9 | TR | image : 1280×1920 · ratio 0.667 ; image : 1920×1280 · ratio 1.500 ; image : 1920×1280 · ratio 1.500 |
| 10 | V | placeholder : 3840×2160 · ratio 1.778 |
| 11 | I | image : 3840×2160 · ratio 1.778 |
| 12 | I | image : 3840×2160 · ratio 1.778 |
| 13 | V | placeholder : 3840×2160 · ratio 1.778 |
| 14 | TR | image : 1280×1920 · ratio 0.667 ; image : 1920×1280 · ratio 1.500 ; image : 1920×1280 · ratio 1.500 |
| 15 | V | placeholder : 3840×2160 · ratio 1.778 |
| 16 | I | image : 3840×2160 · ratio 1.778 |
| 17 | V | placeholder : 3840×2160 · ratio 1.778 |
| 18 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Burson

Source : [https://landor.com/en/our-work/burson/](https://landor.com/en/our-work/burson/).

**Ordre du corps :** H → T → I → V → I ×2 → V → I ×2 → D → TR → I → R.

**Donnée de prochain cas :** Huawei (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 4 | I | image : 3840×2160 · ratio 1.778 |
| 5 | V | placeholder : 3840×2160 · ratio 1.778 |
| 6 | I | image : 3840×2160 · ratio 1.778 |
| 7 | I | image : 3840×2160 · ratio 1.778 |
| 8 | V | placeholder : 3840×2160 · ratio 1.778 |
| 9 | I | image : 3840×2160 · ratio 1.778 |
| 10 | I | image : 3840×2160 · ratio 1.778 |
| 11 | D | image : 2160×3840 · ratio 0.562 ; image : 2160×3840 · ratio 0.562 |
| 12 | TR | image : 1280×1920 · ratio 0.667 ; image : 1920×1280 · ratio 1.500 ; image : 1920×1280 · ratio 1.500 |
| 13 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Huawei

Source : [https://landor.com/en/our-work/huawei/](https://landor.com/en/our-work/huawei/).

**Ordre du corps :** H → T → I → V → I ×2 → TR → I ×2 → R.

**Donnée de prochain cas :** Team Global Express (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 4 | I | image : 3840×2160 · ratio 1.778 |
| 5 | V | placeholder : 3840×2160 · ratio 1.778 |
| 6 | I | image : 3840×2160 · ratio 1.778 |
| 7 | I | image : 3840×2160 · ratio 1.778 |
| 8 | TR | image : 1280×1920 · ratio 0.667 ; image : 1920×1280 · ratio 1.500 ; image : 1920×1280 · ratio 1.500 |
| 9 | I | image : 3840×2160 · ratio 1.778 |
| 10 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### Team Global Express

Source : [https://landor.com/en/our-work/team-global-express/](https://landor.com/en/our-work/team-global-express/).

**Ordre du corps :** H → T → V → I ×11 → R.

**Donnée de prochain cas :** MYOM (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 5 | I | image : 3840×2160 · ratio 1.778 |
| 6 | I | image : 3840×2160 · ratio 1.778 |
| 7 | I | image : 3840×2160 · ratio 1.778 |
| 8 | I | image : 3840×2160 · ratio 1.778 |
| 9 | I | image : 3840×2160 · ratio 1.778 |
| 10 | I | image : 3840×2160 · ratio 1.778 |
| 11 | I | image : 3840×2160 · ratio 1.778 |
| 12 | I | image : 3840×2160 · ratio 1.778 |
| 13 | I | image : 3840×2160 · ratio 1.778 |
| 14 | I | image : 3840×2160 · ratio 1.778 |
| 15 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### MYOM

Source : [https://landor.com/en/our-work/myom/](https://landor.com/en/our-work/myom/).

**Ordre du corps :** H → T → V → I → V ×2 → I ×2 → V → I ×3 → R.

**Donnée de prochain cas :** West Loop (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 4 | V | placeholder : 3840×2160 · ratio 1.778 |
| 5 | I | image : 3840×2160 · ratio 1.778 |
| 6 | V | placeholder : 3840×2160 · ratio 1.778 |
| 7 | V | placeholder : 3840×2160 · ratio 1.778 |
| 8 | I | image : 3840×2160 · ratio 1.778 |
| 9 | I | image : 3840×2160 · ratio 1.778 |
| 10 | V | placeholder : 3840×2160 · ratio 1.778 |
| 11 | I | image : 3840×2160 · ratio 1.778 |
| 12 | I | image : 3840×2160 · ratio 1.778 |
| 13 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### West Loop

Source : [https://landor.com/en/our-work/west-loop/](https://landor.com/en/our-work/west-loop/).

**Ordre du corps :** H → T → V ×2 → D → I ×3 → TR → V → TR → I → V → I → R.

**Donnée de prochain cas :** KitKat (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 4 | V | placeholder : 3840×2160 · ratio 1.778 |
| 5 | V | placeholder : 3840×2160 · ratio 1.778 |
| 6 | D | image : 2160×3840 · ratio 0.562 ; image : 2160×3840 · ratio 0.562 |
| 7 | I | image : 3840×2160 · ratio 1.778 |
| 8 | I | image : 3840×2160 · ratio 1.778 |
| 9 | I | image : 3840×2160 · ratio 1.778 |
| 10 | TR | image : 2160×3840 · ratio 0.562 ; image : 3840×2160 · ratio 1.778 ; image : 3840×2160 · ratio 1.778 |
| 11 | V | placeholder : 3840×2160 · ratio 1.778 |
| 12 | TR | image : 2160×3840 · ratio 0.562 ; image : 3840×2160 · ratio 1.778 ; image : 3840×2160 · ratio 1.778 |
| 13 | I | image : 3840×2160 · ratio 1.778 |
| 14 | V | placeholder : 3840×2160 · ratio 1.778 |
| 15 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### KitKat

Source : [https://landor.com/en/our-work/kitkat/](https://landor.com/en/our-work/kitkat/).

**Ordre du corps :** H → T → V → I ×2 → V → I → V ×3 → D → I → R.

**Donnée de prochain cas :** AO (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1080×1920 · ratio 0.562 |
| 4 | V | placeholder : 3840×2160 · ratio 1.778 |
| 5 | I | image : 3840×2160 · ratio 1.778 |
| 6 | I | image : 3840×2160 · ratio 1.778 |
| 7 | V | placeholder : 3840×2160 · ratio 1.778 |
| 8 | I | image : 3840×2160 · ratio 1.778 |
| 9 | V | placeholder : 3840×2160 · ratio 1.778 |
| 10 | V | placeholder : 3840×2160 · ratio 1.778 |
| 11 | V | placeholder : 3840×2160 · ratio 1.778 |
| 12 | D | image : 1920×2880 · ratio 0.667 ; image : 1920×2880 · ratio 0.667 |
| 13 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### AO

Source : [https://landor.com/en/our-work/ao/](https://landor.com/en/our-work/ao/).

**Ordre du corps :** H → T → I ×5 → TR → I ×5 → R.

**Donnée de prochain cas :** nib (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 4 | I | image : 3840×2160 · ratio 1.778 |
| 5 | I | image : 3840×2160 · ratio 1.778 |
| 6 | I | image : 3840×2160 · ratio 1.778 |
| 7 | I | image : 3840×2160 · ratio 1.778 |
| 8 | I | image : 3840×2160 · ratio 1.778 |
| 9 | TR | image : 1280×1920 · ratio 0.667 ; image : 1920×1280 · ratio 1.500 ; image : 1920×1280 · ratio 1.500 |
| 10 | I | image : 3840×2160 · ratio 1.778 |
| 11 | I | image : 3840×2160 · ratio 1.778 |
| 12 | I | image : 3840×2160 · ratio 1.778 |
| 13 | I | image : 3840×2160 · ratio 1.778 |
| 14 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### nib

Source : [https://landor.com/en/our-work/nib/](https://landor.com/en/our-work/nib/).

**Ordre du corps :** H → T → I → V ×2 → I → V → I ×5 → R.

**Donnée de prochain cas :** QT (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 4 | I | image : 3840×2160 · ratio 1.778 |
| 5 | V | placeholder : 3840×2160 · ratio 1.778 |
| 6 | V | placeholder : 3840×2160 · ratio 1.778 |
| 7 | I | image : 3840×2160 · ratio 1.778 |
| 8 | V | placeholder : 3840×2160 · ratio 1.778 |
| 9 | I | image : 3840×2160 · ratio 1.778 |
| 10 | I | image : 3840×2160 · ratio 1.778 |
| 11 | I | image : 3840×2160 · ratio 1.778 |
| 12 | I | image : 3840×2160 · ratio 1.778 |
| 13 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

### QT

Source : [https://landor.com/en/our-work/qt/](https://landor.com/en/our-work/qt/).

**Ordre du corps :** H → T → V → I → V ×3 → TR → V → I → R.

**Donnée de prochain cas :** non renseignée (présence CMS, pas validation d’un bloc visible).

**Géométrie déclarée des médias, dans leur ordre :**

| Index CMS | Module | Dimensions intrinsèques déclarées |
|---:|---|---|
| 2 | H | image : 3840×2160 · ratio 1.778 ; mobileImage : 1280×1920 · ratio 0.667 |
| 4 | V | placeholder : 3840×2160 · ratio 1.778 |
| 5 | I | image : 3840×2160 · ratio 1.778 |
| 6 | V | placeholder : 3840×2160 · ratio 1.778 |
| 7 | V | placeholder : 3840×2160 · ratio 1.778 |
| 8 | V | placeholder : 3840×2160 · ratio 1.778 |
| 9 | TR | image : 1280×1920 · ratio 0.667 ; image : 1920×1280 · ratio 1.500 ; image : 1920×1280 · ratio 1.500 |
| 10 | V | placeholder : 3840×2160 · ratio 1.778 |
| 11 | I | image : 3840×2160 · ratio 1.778 |

**Application des interactions :** H→P02, breadcrumb→P03, T→P04, I/D/TR/TRM→P05, V→P06, R→P07. Les dimensions ci-dessus sont celles des images/posters livrés par le CMS ; elles ne prouvent pas la résolution encodée du film ni son débit. Les médias eux-mêmes restent sur le site de référence.

## 5. Pages institutionnelles

| Page | Module | Hauteur desktop relevée |
|---|---|---:|
| [privacy-policy](https://landor.com/en/privacy-policy/) | staticPage | 7896 px |
| [cookie-policy](https://landor.com/en/cookie-policy/) | staticPage | 3236 px |
| [modern-slavery-act](https://landor.com/en/modern-slavery-act/) | staticPage | 1361 px |
| [terms-of-use](https://landor.com/en/terms-of-use/) | staticPage | 3249 px |

## 6. Limites de cette annexe

Le relevé complet de structure n’équivaut pas à un visionnage intégral de chaque film ou à un test exhaustif de chaque interaction de chaque page. Les déclencheurs des composants sont audités dans le rapport principal ; leurs variantes sont mappées ici. Les traductions DE/JA et les sites externes sont hors de cette matrice. Une reconstruction doit contrôler les crops et les positions après remplacement des contenus.
