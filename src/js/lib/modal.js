/*******************************************************************************
 * modal.js
 ******************************************************************************/

const modal = (() => {

    // MODAL AND OVERLAY

    // Open and close

    const 
        $modalToggle = document.getElementById('toggle-modal'),
        $modal = document.getElementById('modal'),
        $modalCloseElements = $modal.querySelectorAll('[data-modal="close"]'),
        $overlay = document.getElementById('overlay'),
        $body = document.body

    const openModal = () => {
        $body.classList.add('has-overlay')
        $body.classList.add('has-modal')
        $modal.setAttribute('open', '')
    }

    const closeModal = () => {
        $body.classList.remove('has-overlay')
        $body.classList.remove('has-modal')
        $modal.removeAttribute('open')
    }

    $modalToggle.addEventListener('click', openModal)
    $modalCloseElements.forEach(element => element.addEventListener('click', closeModal));
    $overlay.addEventListener('click', closeModal)

    // Content scrolling
    // Set modal body max-height, depending on variable modal header and footer heights

    const 
        $modalHeader = $modal.querySelector('.modal__header'),
        $modalFooter = $modal.querySelector('.modal__footer'),
        $modalBody = $modal.querySelector('.modal__body')

    const setModalBodyMaxHeight = () => {
        $modalBody.style.maxHeight = 'none'

        const
            modalHeight = $modal.offsetHeight,
            modalHeaderHeight = $modalHeader.offsetHeight,
            modalFooterHeight = $modalFooter.offsetHeight,
            modalBodyHeight = modalHeight - (modalHeaderHeight + modalFooterHeight)

        $modalBody.style.maxHeight = modalBodyHeight
    }

    window.onresize = () => {
        setModalBodyMaxHeight()
    }

    setModalBodyMaxHeight() // Initial setup

    console.log("lib/modal.js is loaded")
})()
 
export default modal