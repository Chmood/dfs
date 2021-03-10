# TODO & BUGS

## BUGS

- Icons: too small in default button
- Favicons from `manifest.json` missing / 404 (`assets/` in paths)
- Fix Browsersync!
- Button inheritance: using @btn mixin compared to .btn classes => classes should win
- Ripple FX: 
  - make keyboard click (enter key) pop from the center of the element (instead of top left corner)
  - ripple in sticky header navbar only works when no scroll

## TODO

- **GLOBAL**

- **STYLEGUIDE**
  - Documenter la grille, les breakpoints, $gutter...
  - Exemples de code + Prism.js dans le styleguide

- **BUILD**
  - Cachebusting en prod (hash à la fin des noms de fichiers) => voir selon CMS

- **CSS**
  - _COMPONENTS_
    - `_forms.scss`: (WIP...)
      - radio / checkbox full SVG [???]
    - `_buttons.scss`: 
      - `.btn-bg-grow` : dark variants
      - refactor du modifieur `hollow` (won't-do: semble complexe) [???]
    - `_colors.css`:
      - cool and warm gray scales (ex: https://tailwindcss.com/docs/customizing-colors#color-palette-reference)
    - LAYOUT :
      - `navbar` (mobile and desktop) [WIP]
    - Others :
      - Breadcrumbs ?
      - Pagination ?
      - Social icons ?
      - Dropdowns (for navbar) ?
  - MISC
    - @mixins : background-cover() ?
    - GSAP ? / parallax ? / Lightbox ? / carousel (Owl needs jQuery!) ?
    - transition easings ?
    - generate classes boolean for:
      - forms
      - fixed-ratio (?)
      - layout (?)

- **JS**
  - Fichier de config pour eslint (à définir ensemble)
  - Utiliser jQuery ? (pour Select2, ou Owl Carousel par exemple)
  - _COMPONENTS_
    - Ré-écrire `scroller.js` sans dépendance jQuery (cf. https://css-tricks.com/snippets/jquery/smooth-scrolling/)
    - Scroll watcher ? (scroll-to-top button etc...)
    - Porter `accordions.js` (sur le modèle de `tabs.js`)
    - Throttle et debounce helpers pour les promises

- **ASSETS**
  - Icones : prévoir un set minimal ("fermer", "hamburger", "search", arrows, carrets...)
