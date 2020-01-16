/*
 * wavelength.js
 *
 */

import {terminal} from "./dfhi.js";

window.main = function(...argv) {
	let wavelength = parseInt(argv[0]);
	if(wavelength > 635 && wavelength <= 700){
		terminal.printl("red");
	}
	else if(wavelength > 590 && wavelength <= 700){
		terminal.printl("orange");
	}
	else if(wavelength > 560 && wavelength <= 700){
		terminal.printl("yellow");
	}
	else if(wavelength > 520 && wavelength <= 700){
		terminal.printl("green");
	}
	else if(wavelength > 490 && wavelength <= 700){
		terminal.printl("cyan");
	}
	else if(wavelength > 450 && wavelength <= 700){
		terminal.printl("blue");
	}
	else if(wavelength >= 400 && wavelength <= 700){
		terminal.printl("violet");
	}
	else{
		terminal.printl(`the wavelength ${wavelength}nm is not in the visible spectrum`);
	}
};
