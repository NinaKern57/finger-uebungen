/*
 * 01-helloworld-terminal.js
 *
 */

import {terminal} from "./dfhi.js";

// Hello Name function, put in comment and uncomment final line for regular Hello World function.
window.main = function(...argv) {
	let name = argv[0];
	terminal.printl(`Hallo ${name}!`)
};

// terminal.print("Hallo Welt!");