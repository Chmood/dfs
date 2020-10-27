/*******************************************************************************
 * assets.js
 * Import and require all assets (CSS, images, sprites...)
 ******************************************************************************/

// Import Normalize CSS
// import "../../node_modules/normalize.css/normalize.css"

// Import CSS entry point for webpack
import '../scss/main.scss';

// SVG sprites
// See: https://community.wia.io/d/6-generating-an-svg-sprite-sheet-with-webpack
function requireAll(r) {
    r.keys().forEach(r)
}

requireAll(require.context("../img/sprites/", true, /\.svg$/))
// requireAll(require.context("../img/", true, /\.*$/))

const assets = () => {}

console.log("assets.js is loaded")

export default assets
