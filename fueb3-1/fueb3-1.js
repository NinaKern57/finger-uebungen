import {terminal} from "./dfhi.js";
let rivers = {};
window.main = function(...argv) {
	let river = argv[0];
	let length = Number.parseFloat(argv[1]);
	rivers[river] = length;
	let html = "<dl>";
	for(let [r, v] of Object.entries(rivers)) {
		let l = rivers[r];
		html += `<dt style="font-weight: bold;font-family: Serif">${r}<dt>
		<dd>${l}</dd>`;
	}
	html += `</dl><hr/>`;
	terminal.printh(html);
};