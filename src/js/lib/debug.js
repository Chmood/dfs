/*******************************************************************************
 * DEBUG
 * Path: lib/debug.js
 ******************************************************************************/

import { throttle } from "./debounce-throttle"

const debug = (() => {

    const $debugItemsScreenWidth = document.querySelectorAll('.js-debug-item-screen-width')

    const updateDebugItemsScreenWidth = throttle(() => {
        const screenWidth = window.innerWidth
        $debugItemsScreenWidth.forEach(($item) => {
            $item.textContent =  screenWidth;
        })
        // console.log('Screen width changed:', screenWidth + 'px')
    }, 200) // 5x per second max

    window.onresize = updateDebugItemsScreenWidth
    updateDebugItemsScreenWidth()

    console.log("* lib/debug.js is loaded")
})()
 
export default debug
