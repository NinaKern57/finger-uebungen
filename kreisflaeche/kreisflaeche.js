/*
 * kreisflaeche.js
 *
 */

import {terminal} from "./dfhi.js";

window.main = function(...argv) {
	let radius = parseInt(argv[0]);
	const PI = 3.14159;
	let area = PI * (radius ** 2);
	terminal.printl(area);
};
