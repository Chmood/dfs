import $ from "jquery"

// SCROLLER

const scroller = (() => {


    // When $element is clicked, scroll to $target smoothly
    // (takes sticky header height into account)
    const bindSmoothScrollTo = ($element, $target) => {
        
        $element.addEventListener('click', (event) => {
            // Don't follow links, we'll scroll manually
            event.preventDefault()
            
            // Compute sticky header height
            const hasStickyHeader = (document.querySelector("body.has-sticky-header") !== null)
            const $header = document.querySelector(".site-header")
            const headerHeight = hasStickyHeader ? $header.offsetHeight : 0

            // Scroll to $target
            window.scroll({
                top: $target.offsetTop - headerHeight, 
                left: 0, 
                behavior: 'smooth'
            });

            console.warn('$target.offsetTop', $target.offsetTop)
            console.warn('header height', headerHeight)
        })
    }

    // Get all elements with "data-scroll" attribute
    const $scrollers = document.querySelectorAll("[data-scroll]")

    for (const $scroller of $scrollers) {

        const scrollTarget = $scroller.getAttribute("data-scroll")
        const $scrollTarget = document.querySelector(scrollTarget)

        if ($scrollTarget !== null) {
            bindSmoothScrollTo($scroller, $scrollTarget)

        } else {
            console.warn('scroller.js: no such target "' + scrollTarget + '"!')
        }
    }

    
    // Get all links to local anchors
    const $linksToAnchors = document.querySelectorAll("a[href^='#']")

    for (const $link of $linksToAnchors) {
        // Get the target anchor
        const scrollTarget = $link.getAttribute("href")

        if (scrollTarget !== "" && scrollTarget !== "#") {
            // Get the target element
            const $scrollTarget = document.querySelector(scrollTarget)
            
            if ($scrollTarget !== null) {
                bindSmoothScrollTo($link, $scrollTarget)

            } else {
                console.warn('scroller.js: no such target "' + scrollTarget + '"!')
            }
        }
    }

    console.log("* lib/scroller.js is loaded")
})()

export default scroller