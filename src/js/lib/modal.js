/*******************************************************************************
 * modal.js
 ******************************************************************************/

const modal = (() => {

    // MODAL AND OVERLAY

    // DOM elements

    const 
    $modalToggles = document.querySelectorAll('[data-toggle="modal"]'),
    $modals = document.querySelectorAll('.modal'),
    $overlay = document.getElementById('overlay'),
    $body = document.body
    
    // Open and close functions

    const openModal = ($modal) => {
        $body.classList.add('has-overlay')
        $body.classList.add('has-modal')
        $modal.setAttribute('open', '')
    }

    const closeModal = ($modal) => {
        $body.classList.remove('has-overlay')
        $body.classList.remove('has-modal')
        $modal.removeAttribute('open')
    }

    // Opening with toggles

    $modalToggles.forEach($toggle => $toggle.addEventListener('click', () => {
        const $targetSelector = $toggle.getAttribute('data-target')

        if ($targetSelector) {
            const $target = document.querySelector($targetSelector)

            if ($target) {
                openModal($target)
            }
        }
    }));

    // Closing a single modal with close buttons
    $modals.forEach($modal => {
        const $modalCloseElements = $modal.querySelectorAll('[data-modal="close"]')

        $modalCloseElements.forEach($modalCloseElement => $modalCloseElement.addEventListener('click', () => {
            closeModal($modal)
        }))
    })

    // Closing all modals when overlay is clicked
    $overlay.addEventListener('click', () => {
        $modals.forEach($modal => closeModal($modal))
    })

    console.log("lib/modal.js is loaded")
})()
 
export default modal