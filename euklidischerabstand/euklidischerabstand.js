/*
 * euklidischerabstand.js
 *
 */

import {terminal} from "./dfhi.js";

window.main = function(...argv) {
	let px = parseInt(argv[0]);
	let py = parseInt(argv[1]);
	let d  = Math.sqrt(px**2 + py**2);
	terminal.printl(d);
};
