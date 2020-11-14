/*******************************************************************************
 * TABS
 * Path: lib/tabs.js
 ******************************************************************************/

const tabs = (() => {
    const defaultActiveClassname = "active"
    const $togglers = document.querySelectorAll("[data-tabs-toggle]")

    let tabGroups = []

    $togglers.forEach($toggler => {
        const tabGroup = $toggler.getAttribute("data-tabs-group")
        if (! tabGroups.includes(tabGroup)) {
            tabGroups.push(tabGroup)
        }
    })
    
    // console.log('tabGroups', tabGroups)

    tabGroups.forEach(tabGroup => {
        // Get the togglers of the same group
        const $groupTogglers = document.querySelectorAll(`[data-tabs-toggle][data-tabs-group="${tabGroup}"]`)
        // console.log('$groupTogglers', $groupTogglers)
        
        $groupTogglers.forEach($toggler => {
            const $groupContents = document.querySelectorAll(`[data-tabs-content][data-tabs-group="${tabGroup}"]`)
            const targetsSelector = $toggler.getAttribute("data-tabs-target")
            const $targets = targetsSelector ? 
                document.querySelectorAll(targetsSelector) : // Use optional selector as targets
                [$toggler] // or self by default

            // On click
            $toggler.addEventListener("click", () => {
                // Remove active class on all togglers
                $groupTogglers.forEach($groupToggler => $groupToggler.classList.remove(defaultActiveClassname))
                // Add active class on active toggler
                $toggler.classList.add(defaultActiveClassname)
                // Remove active class on all tab contents
                $groupContents.forEach($groupContent => $groupContent.classList.remove(defaultActiveClassname))
                // Add active class on active tab content
                $targets.forEach($target => $target.classList.add(defaultActiveClassname))
            })
        })
    })

    console.log("* lib/tabs.js is loaded")
})()

export default tabs