/*******************************************************************************
 * SELECT 2
 * Path: lib/select2.js
 ******************************************************************************/

// import $ from "jquery"
import { debounce } from "./debounce-throttle"

import Choices from "choices.js"
// import select2 from "select2"

const select = (() => {

// CHOICES.JS
// See: https://github.com/jshjohnson/Choices

    const $selects = document.querySelectorAll("select")

    $selects.forEach(($select) => {
        /*const $choices = */new Choices($select, {
            // items: ['value 1', 'value 2', 'value 3'],
            // choices: [{
            //     value: 'Option 1',
            //     label: 'Option 1',
            //     selected: true,
            //     disabled: false,
            //   },
            //   {
            //     value: 'Option 2',
            //     label: 'Option 2',
            //     selected: false,
            //     disabled: true,
            //     customProperties: {
            //       description: 'Custom description about Option 2',
            //       random: 'Another random custom property'
            //     },
            //   }],
            searchEnabled: false,
            searchChoices: false,
            shouldSort: false,
            // addItems: false, // Sort of disabled?
            editItems: false,
            // placeholderValue: "Select placeholder text",
            // searchPlaceholderValue: null,
            itemSelectText: 'Select',
            removeItemButton: true,
        })
    })

    console.log("choices.js is loaded")

//SELECT2

//   const initSelect2 = debounce(function($selects) {
//     // See: https://select2.org/configuration
//     $selects.select2({
//       minimumResultsForSearch: Infinity
//     })

//     console.log("Select2 resized")
//   }, 250)

//   const $selects = document.querySelectorAll("select")

//   if ($selects.length) {
//     initSelect2($selects)

//     window.addEventListener("resize", function() {
//       initSelect2($selects)
//     })
//   }

//   console.log("select2.js is loaded")
})()

export default select