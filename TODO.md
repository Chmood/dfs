# TODO

- [ ] **GLOBAL**
  - Exemples de code + Prism.js dans le styleguide

- [ ] **BUILD**
  - Cachebusting en prod (hash à la fin des noms de fichiers) => voir selon CMS

- [ ] **CSS**
  - _COMPONENTS_
    - Formulaires (`_forms.scss`) (WIP...)
      - radio / checkbox full SVG [???]
    - `_buttons.scss` : refactor du modifieur `hollow` (semble complexe) [???]
    - LAYOUT :
      - `navbar` (mobile and desktop) [???]
      - `fixed-ratio`
      - `capped-width` (aka `max-width-md`)
    - MISC
      - z-index scale
      - new color shades : 'lighty' and 'darky' (9 shades instead of 7) [???]

- [ ] **JS**
  - Fichier de config pour eslint (à définir ensemble)
  - Utiliser jQuery ? (pour Select2 par exemple)
  - _COMPONENTS_
    - Porter `tabs.js`
    - Throttle et debounce helpers pour les promises
    - Scroll watcher ?

- [ ] **ASSETS**
  - Icones : prévoir un set minimal ("fermer", "hamburger"...)
  - Préparer une base pour les favicons (cf. nouveaux favicons en SVG => https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/) (et plugin webpack: https://github.com/jantimon/favicons-webpack-plugin)


# NOTES

## Bootstrap 4

bootstrap.min.css: 145kB

* reboot.css (comes after normalize.css, improves element base styles)
* breakpoints media queries for "min", "max", "only" and "range"
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

