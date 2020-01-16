/*
 * fueb4-2.js
 *
 */

import {terminal} from "./dfhi.js";

window.main = function(...argv) {
	let gifts = ["Ballonfahrt", "Fallschirm Sprung", "Ferrari fahren", "Snowbike fahren", "Strümpfe"];
	let chooser = giftChooserBuilder(gifts);
	let gift;
	// TEST: The same gift shouldn't be displayed twice. All gifts should be displayed. -1 shoudl be displayed at the end (to signal that there aren't any presents left)
	do {
		gift = chooser();
		terminal.printl(gift);
	}while(gift != -1);
};

function giftChooserBuilder(array){
	let gifts = new Array();
	for(let value of array)
	{
		gifts.push(value);
	}
	return () => (gifts.length > 0) ? gifts.splice(ezRandom(0, gifts.length - 1), 1) : -1; // return inline function : function returns: if the length of gifts is > 0 : a random value in it; otherwise : -1 to signal it is done.
}

function ezRandom(min, max)
{
	return Math.floor(Math.random() * (max - min) ) + min;
}