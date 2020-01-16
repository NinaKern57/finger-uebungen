/*
 * fueb2-8.js
 *
 */

import {terminal} from "./dfhi.js";
import {newInput} from "./dfhi-dom.js";

// Initialize page
let firstNameInput = undefined;
let surnameInput = undefined;
// fields only inserted after the DOM is loaded.
document.addEventListener("DOMContentLoaded", function(){
	firstNameInput = newInput("first-name", "First Name");
	surnameInput = newInput("surname", "Surname");

});

window.main = function(...argv) {
	let firstName = firstNameInput.value;
	let surname = surnameInput.value;
	terminal.print(`Hello ${firstName} ${surname} from DOM`);
};
