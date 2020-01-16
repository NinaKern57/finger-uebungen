import {terminal} from "./dfhi.js";
function echo() {
    terminal.printl(document.getElementById("textbox").value);
}
function init() {
    document.getElementById("textbox")
        .addEventListener("change", echo);
}
function mapButton() {
    let echoButton = document.getElementById("textbox");
    if(echoButton) {
        echoButton.addEventListener("change", echo); // CHANGE durch INPUT ersetzen um "live" die änderungen zu sehen
    } else {
        terminal.printl("No button with id 'echo' found");
    }
}
document.addEventListener("DOMContentLoaded", mapButton);