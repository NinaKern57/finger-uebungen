/*
 * fueb2-15.js
 *
 */

import {terminal} from "./dfhi.js";
import {download} from "./dfhi-dom.js";
import {newClickButton} from "./dfhi-dom.js";

function createButton(){
	let button = newClickButton("download"); // add the button to the page
	button.addEventListener("click", function () { // create a new listener that activates when the button is clicked
		download("output.txt", document.getElementById("text-output").innerText); // this will create a file names "output.txt" holding the content of the "terminal output" and allow the user to download it
	});
}

window.main = function(...argv) { // this is just there to push content to the output console to display in the downloaded file
	terminal.printl("Test text");
	terminal.printl("fueb2-15");
};

document.addEventListener("DOMContentLoaded", createButton); // call createButton() when the DOM has finished loading