import {terminal} from "./dfhi.js";
function echo() {
    let inputElement = document.getElementById("input");
    if(inputElement) { /*if an element with id input exists*/
        let text = inputElement.value;
        terminal.printl(text);
    } else {
        terminal.print("No element with id 'input' found");
    }
}
function mapButton() {
    let echoButton = document.getElementById("echo");
    if(echoButton) {
        echoButton.addEventListener("click", echo);
    } else {
        terminal.printl("No button with id 'echo' found");
    }
}
document.addEventListener("DOMContentLoaded", mapButton);