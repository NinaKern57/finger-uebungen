import {terminal} from "./dfhi.js";
let rivers = {}; // rivers is a dictionnary that will persist accross multiple executions of the program

window.main = function(...argv) {
	let river = argv[0]; // name of the river is the first argument
	let length = Number.parseFloat(argv[1]); // length of the river is the second argument
	rivers[river] = length; // new river with the name given as key and the length as value
	// Display the array
	let html = "<dl>"; // opening a "definition / description" field
	for(let [r, v] of Object.entries(rivers)) { // go through all the rivers that were added
		let l = rivers[r];
		html += `<dt style="font-weight: bold;font-family: Serif">${r}<dt>
		<dd>${l}</dd>`; // the river name is the term (dt) and the length is the definition (dd)
	}
	html += `</dl><hr/>`; // close all the tags and add a separator
	terminal.printh(html); // print the resulting html
};