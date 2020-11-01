/*******************************************************************************
 * toggle.js
 ******************************************************************************/

const toggle = (() => {
    const defaultActiveClassname = "active"
    const $togglers = document.querySelectorAll("[data-toggle]")

    $togglers.forEach($toggler => {
        const targetsSelector = $toggler.getAttribute("data-toggle")

        // Target
        const $targets = targetsSelector ? 
            document.querySelectorAll(targetsSelector) : // Use optional selector as targets
            [$toggler] // or self by default

        // Class name
        const classname = $toggler.getAttribute("data-toggle-classname") ? 
            $toggler.getAttribute("data-toggle-classname") : // Get the optional classname
            defaultActiveClassname // or use "active" by default
        
        $targets.forEach($target => {
            $toggler.addEventListener("click", () => {
                $target.classList.toggle(classname)
            })
        })
    })

    console.log("toggler.js is loaded")
})()

export default toggle