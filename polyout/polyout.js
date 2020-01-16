/*
 * polyout.js
 *
 */

import {terminal} from "./dfhi.js";

function polyout(polynome, variable)
{
	let acc = "";
	for(let i = polynome.length - 1; i >=0; i--)
	{
		let num = parseFloat(polynome[i]);
		if(num != 0)
		{
			if(i > 1)
			{
				acc += (num > 0) ? ` + ${num} * ${variable}^${i}` : ` ${num} * ${variable}^${i}`;
			}
			else
			{
				let exp = (i > 0) ? " * x" : "";
				acc += (num > 0) ? ` + ${num}${exp}` : ` ${num}${exp}}`;
			}
		}
	}
	return acc;
}

window.main = function(...argv) {
	let polynome = [1, 2, 98, 0, -10, 2];
	terminal.printl(polyout(polynome, "x"));
};
