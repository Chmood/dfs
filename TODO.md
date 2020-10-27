# TODO

- [ ] **GLOBAL**
  - Repasser sur le script bash des permissions (Jean-Luc)
  - Rédiger la documentation (avec exemples de code + Prism.js)
  - Mettre en place une démo / styleguide (projet séparé ou pas)

- [ ] **BUILD**
  - Cachebusting en prod (hash à la fin des noms de fichiers) => voir selon CMS

- [ ] **CSS**
  - _COMPONENTS_
    - Modale + overlay (WIP...)
    - Formulaires (`_forms.scss`) (WIP...)
      - radio / checkbox (simple + SVG)
      - input's prefix & suffix (text, icon, button)
    - `_buttons.scss` : refactor du modifieur `hollow`, et icones SVG
    - LAYOUT :
      - `header-sticky`
      - `wrappers` (mainly for HTML structure)
      - `navbar` (mobile and desktop)
      - `fixed-ratio`
      - `capped-width`
    - MISC

- [ ] **JS**
  - Fichier de config pour eslint (à définir ensemble)
  - Utiliser jQuery ? (Select2)
  - _COMPONENTS_
    - `ajax.js` : utiliser axios ? Ou juste fetch ?
    - Porter `tabs.js` et `toggler.js`
    - Nouveau composants éventuels :
      - Throttle et debounce helpers (pour les promises aussi)
      - Scroll watcher
      - Mobile "Ripple" touch effect (UX feedback) ?

- [ ] **ASSETS**
  - Icones : FontAwesome ou full-SVG ?
  - Préparer une base pour les favicons (cf. nouveaux favicons en SVG => https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/)

# DONE

- [ ] **GLOBAL**
  - Trouver un vrai nom (https://www.wordhippo.com/what-is/the/japanese-word-for-260916a2dcc5207229d1bac2e5930abac150297e.html)
  - Mise à jour de node et de NPM
  - Mettre à jour les paquets npm et les reclasser correctement (`devDependencies`)
  - Repenser la structure 

- [ ] **BUILD**
  - Dossier `/dist` + flush/clean
  - Mode verbeux pour le `watch` par défaut
  - Prévoir le `live-reload` (dev-server / browsersync) pour le futur (dev en local)
  - Variable ENV pour dev ou prod
  - Sourcemaps CSS + JS (à BIEN tester !)

- [ ] **CSS**
  - Sortir `_variables.scss` à la racine de `/src/scss` (même niveau que `main.scss`)
  - S'accorder sur une convention de nommage des classes et des variables (kebab-case partout)
  - Refactor des `@extend` au profit de mixins
  - Supprimer les sélecteurs composés (ex: `&-foo`)
  - Améliorer les debug des breakpoints
  - _COMPONENTS_
    - Créer une vraie palette unifiée (`_colors.scss`) => voir avec Laurent
    - `_gutter.scss` : unité de taille unique (nom à définir)
    - Regrouper les styles typographique dans `_type.scss` (fontsize, graisses, titraille)
    - Grille flex + containers + breakpoints : à voir avec Jean-Luc et Laurent
    - `_layout.scss` : html/body height, sticky footer...

- [ ] **JS**
  - Validation JS avec ESLint

- [ ] **ASSETS**
  - Simple copy (fonts, favicons...)
  - Optimisation des images (en production uniquement)
  - SVG sprites (au lieu de icon-font-plugin)


# NOTES

## Bootstrap 4

bootstrap.min.css: 145kB

* reboot.css (comes after normalize.css, improves element base styles)
* breakpoints media queries for "min", "max", "only" and "range"
* z-index scale
* grid & layout:
  * same-sizing columns: (ex: `.col { flex-basis: 0; flex-grow: 1; }`)
  * fixed-sizing columns: flex-basis + max-width (+ flex-grow: 0;) (ex: `.col-6`)
  * natural-sizing columns: (ex: `.col-auto { flex: 0 0 auto; width: auto; max-width: none; }`)
  * full-width class helper: `w-100 { width: 100% !important; }`
  * display helpers: [https://getbootstrap.com/docs/4.0/utilities/display/] (no more `.visible-md` or `.hidden-xl`) + visibility helpers (`.visible` & `.invisible`)
  * responsive re-ordering classes: (ex: `.order-12 { order: 12; }`, `.order-first { order: -1; }`, `.order-last { order: 13; }`...)
  * offset class are left margin based
  * auto margin left/right classes (no need for spacer col, no flex-grow)
* content:
  * native font stack: [https://getbootstrap.com/docs/4.0/content/reboot/#native-font-stack]
  * responsive text-align helpers
  * ellipsis with `.text-truncate`
  * forms:
    * multiple sizes for inputs, labels...
    * `.form-group` on fieldsets or simple divs (flex layout, block or inline)
    * prefix and suffix: multiple, simple text and buttons, on text inputs and selects
  * pagination, breadcrumbs
* components:
  * poppper.js for dropdowns dynamic positioning and viewport detection
  * tabs
  * accordions (with `collapse.js`)
  * modals: 
    * ARIA:
      * `role="dialog"`, `aria-hidden="true"` and `aria-labelledby="..."` (referencing the modal title) on modal parent element (the overlay)
      * ` role="document"` on child element (the modal itself)
  * scrollspy

