// KEYBOARD

const keyboard = (() => {

    const $body = document.querySelector('body')

    document.addEventListener('keydown', (event) => {
        const keyName = event.key;

        // Close panels, mobile menu and search overlay when escape key is pressed
        if (keyName === 'Escape') {
            $body.classList.remove('has-panel has-panel-menu has-overlay has-search-overlay')
            return;
        }

    }, false);

    console.log("* lib/keyboard.js is loaded")
})()

export default keyboard
