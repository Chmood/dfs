/*******************************************************************************
 * RIPPLE
 * Path: lib/ripple.js
 ******************************************************************************/

const ripple = (() => {
    
    const createRipple = (event) => {
        const $button = event.currentTarget
        
        const circle = document.createElement("span")
        const diameter = Math.max($button.clientWidth, $button.clientHeight)
        const radius = diameter / 2
        
        circle.style.width = circle.style.height = `${diameter}px`
        circle.style.left = `${event.offsetX - radius}px`
        circle.style.top = `${event.offsetY - radius}px`
        circle.classList.add("ripple")
        circle.addEventListener('animationend', () => $button.removeChild(circle))
        
        $button.appendChild(circle)
    }
    
    const $buttons = document.querySelectorAll("button, .btn")
    
    for (const $button of $buttons) {
        $button.addEventListener("click", createRipple)
    }

    console.log("* lib/ripple.js is loaded")
})()

export default ripple
