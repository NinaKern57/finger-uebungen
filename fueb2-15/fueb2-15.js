/*
 * fueb2-15.js
 *
 */

import {terminal} from "./dfhi.js";
import {download} from "./dfhi-dom.js";
import {newClickButton} from "./dfhi-dom.js";

function createButton(){
	let button = newClickButton("download");
	button.addEventListener("click", function () {
		download("output.txt", document.getElementById("text-output").innerText);
	});
}

window.main = function(...argv) {
	terminal.printl("Test text");
	terminal.printl("fueb2-15");
};

document.addEventListener("DOMContentLoaded", createButton);