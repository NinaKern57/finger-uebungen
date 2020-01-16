/*
 * fueb4-2.js
 *
 */

import {terminal} from "./dfhi.js";

window.main = function(...argv) {
	let gifts = ["Ballonfahrt", "Fallschirm Sprung", "Ferrari fahren", "Snowbike fahren", "Strümpfe"]; // gift list
	let chooser = giftChooserBuilder(gifts); // chooser function
	let gift;
	// TEST: The same gift shouldn't be displayed twice. All gifts should be displayed. -1 shoudl be displayed at the end (to signal that there aren't any presents left)
	do {
		gift = chooser();
		terminal.printl(gift);
	}while(gift != -1);// run the loop until the array is empty. One pass guaranteed
};

/**
 * Returns a function to randomly pick a gift from a given array
 * @param array : array of the lists
 * @returns {function(): any} function that will remove a gift from the array and return its value
 */
function giftChooserBuilder(array){
	let gifts = new Array(); // initialize an empty array
	for(let value of array) // used to have a full copy of the given array to work with and not a reference
	{
		gifts.push(value);
	}
	// CANCER
	return () => (gifts.length > 0) ? gifts.splice(ezRandom(0, gifts.length - 1), 1) : -1; // return inline function : function returns: if the length of gifts is > 0 : a random value in it; otherwise : -1 to signal it is done. splice() is used to remove one or more elements starting at a given position in the aray
}

/**
 * I am too lazy to put in the complete formula each time i want an usable so there you are
 * @param min : minimum value
 * @param max : maximum value
 * @returns integer value between min and max
 */
function ezRandom(min, max)
{
	return Math.floor(Math.random() * (max - min) ) + min;
}