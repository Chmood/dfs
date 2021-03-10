import $ from "jquery"
// import { tns } from "tiny-slider"
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider.js"

// SLIDER

const slider = (() => {

    // Example slider

    const slider = tns({
        container: '.tiny-slider',
        controlsPosition: 'bottom',
        controlsText: ['<', '>'],
        mouseDrag: true,
        // items: 3,
        // slideBy: 'item',
        // autoplay: true
    })  

    console.log("* lib/slider.js is loaded")
})()

export default slider