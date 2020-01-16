/*
 * quad_gleichung.js
 *
 */

import {terminal} from "./dfhi.js";

window.main = function(...argv) {
	let a = parseInt(argv[0]);
	let b = parseInt(argv[1]);
	let c = parseInt(argv[2]);
	let delta = b**2 - 4*a*c;
	if(delta > 0)
	{
		let rdelta = Math.sqrt(delta);
		let r1 = (-b - rdelta) / (2*a);
		let r2 = (-b + rdelta) / (2*a);
		terminal.printl(`The solutions are ${r1} and ${r2}`);
	}
	else if (delta == 0)
	{
		let r = (-b) / (2*a);
		terminal.printl(`The solution is ${r}`);
	}
	else
	{
		terminal.printl('No real solution');
	}
};
