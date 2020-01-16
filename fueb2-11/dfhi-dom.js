import {DomOutput} from "./DomIO.js";

/**
 *  @param{string} name Name of new input
 *  @param{string} type HTML Typle of new input, must be one of value in
 *
 *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 *
 *  @return HTMLElement <input>-Element, but not the container element <label>
 * */
export function newInput(name, label=name) {
	let inputHTML = `<label style="display: block" for="${name}">${label}:
			<input id="${name}" name="${name}" ></input>
		</label>`;
	let inputDom = (new DOMParser()).parseFromString(inputHTML, "text/html");
	let inputElement = inputDom.getElementById(name);
	let inputContainer = document.getElementById("input-container");
	let run = document.getElementById("run");
	inputContainer.insertBefore(inputDom.body.firstChild, run);
	return inputElement;
}


/**
 *
 * */
export function download(filename, textContent, mimeType="text/plain") {
	let pseudoLink = document.createElement('a');
	pseudoLink.setAttribute('href',
		`data:${mimeType};charset=utf-8,${encodeURIComponent(textContent)}` );
	pseudoLink.setAttribute('download', filename);
	
	if (document.createEvent) {
		let event = document.createEvent('MouseEvents');
		event.initEvent('click', true, true);
		pseudoLink.dispatchEvent(event);
	}
	else {
		pseudoLink.click();
	}
}

/**
 * @param {string} name Name of the button, is also used for the id of button
 * @param {function} action Action, which is connected to the button's click event
 * @param {string} caller of this function can define a Text, which is show on the Button label
 *                 by using this parameter explicit.
 *
 * @return {HTMLElement} new created button
 * */
export function newClickButton(name, action, label=name) {
	let buttonHTML =
		`<span style="display: block">
			<button type="button" id="${name}" name="${name}">${label}</button>
		</span>`;
	let buttonDOM =  (new DOMParser()).parseFromString(buttonHTML, "text/html");
	let buttonElement = buttonDOM.getElementById(name);
	let inputContainer = document.getElementById("input-container");
	let run = document.getElementById("run");
	if (run) {
		inputContainer.insertBefore(buttonDOM.body.firstChild, run.nextSibling);
	} else {
		inputContainer.appendChild(buttonDOM);
	}
	buttonElement.addEventListener("click", action);
	return buttonElement;
}

function init(){
	try {
		if (window.init) {
			window.init();
		}
	}catch (e) {
		console.log(e);
	}
}

document.addEventListener("DOMContentLoaded",init);