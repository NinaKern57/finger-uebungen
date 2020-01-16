/*
 * triangle.js
 *
 */

import {terminal} from "./dfhi.js";

window.main = function(...argv) {
	let i = 0;
	let max = argv[0];
	for(let i = 0; i < max; i++)
	{
		terminal.print("* " * i);
	}
};
