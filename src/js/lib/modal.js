/*******************************************************************************
 * MODAL
 * Path: lib/modal.js
 ******************************************************************************/

// Focus trap (see: https://github.com/focus-trap/focus-trap)
import { createFocusTrap } from 'focus-trap';

const modal = (() => {

    // MODAL AND OVERLAY

    // DOM elements

    const 
        $site = document.querySelector('.site-wrapper'),
        $modalToggles = document.querySelectorAll('[data-toggle="modal"]'),
        $modals = document.querySelectorAll('.modal'),
        $overlay = document.getElementById('overlay'),
        $body = document.body

    let 
        $lastFocus, // Keep track of last focused element of underlaying page
        focusTrap // Global trap for modals focus
    
    // Open and close functions

    const openModal = ($modal) => {
        $lastFocus = document.activeElement; // Save main page focused element

        $site.setAttribute('aria-hidden', true)
        $modal.setAttribute('tabindex', '0');

        $body.classList.add('has-overlay')
        $body.classList.add('has-modal')
        $modal.setAttribute('open', '')

        const $focusTargets = $modal.querySelectorAll('[data-modal-focus]')
        // // Old element focus code (no focus trap)
        // console.log('$focusTargets', $focusTargets)
        // if ($focusTargets.length > 0) {
        //     // Focus first element
        //     $focusTargets[0].focus()
        // }

        // Focus trap (keep focus inside modal)
        focusTrap = createFocusTrap($modal, {
            initialFocus: $focusTargets[0],
            clickOutsideDeactivates: true
        });
        focusTrap.activate()
    }

    const closeModal = ($modal) => {
        $site.setAttribute('aria-hidden', false)
        $modal.setAttribute('tabindex', '-1');

        $body.classList.remove('has-overlay')
        $body.classList.remove('has-modal')
        $modal.removeAttribute('open')

        // Remove focus trap

        if (focusTrap?.deactivate) {
            focusTrap.deactivate()
        }

        if ($lastFocus) {
            $lastFocus.focus(); // Restore main page focused element
        }
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

    // Closing all modals when escape key is pressed

    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            $modals.forEach($modal => closeModal($modal))
        }
    })

    console.log("* lib/modal.js is loaded")
})()
 
export default modal
