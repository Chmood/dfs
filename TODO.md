# TODO & BUGS

## BUGS

- Favicons from `manifest.json` missing / 404 (`assets/` in paths)
- Fix Browsersync!
- Button inheritance: using @btn mixin compared to .btn classes => classes should win
- Ripple FX : make keyboard click (enter key) pop from the center of the element (instead of top left corner)

## TODO

- **GLOBAL**

- **STYLEGUIDE**
  - Documenter la grille, les breakpoints, $gutter...
  - Exemples de code + Prism.js dans le styleguide

- **BUILD**
  - Cachebusting en prod (hash à la fin des noms de fichiers) => voir selon CMS

- **CSS**
  - _COMPONENTS_
    - Formulaires (`_forms.scss`) (WIP...)
      - radio / checkbox full SVG [???]
    - `_buttons.scss` : 
      - refactor du modifieur `hollow` (semble complexe) [???]
    - LAYOUT :
      - `navbar` (mobile and desktop) [???]
    - Others :
      - Breadcrumbs ?
      - Pagination ?
      - Social icons ?
  - MISC
    - z-index scale
    - @mixins : background-cover() ?
    - GSAP ? / parallax ? / Lightbox ? / carousel (Owl needs jQuery!) ?

- **JS**
  - Fichier de config pour eslint (à définir ensemble)
  - Utiliser jQuery ? (pour Select2, ou Owl Carousel par exemple)
  - _COMPONENTS_
    - Porter `accordions.js` (sur le modèle de `tabs.js`)
    - Throttle et debounce helpers pour les promises
    - Scroll watcher ? (scroll-to-top button etc...)

- **ASSETS**
  - Icones : prévoir un set minimal ("fermer", "hamburger"...)
