/**
 * Function to add user input to the DOM for javascript programs
 * @param name : name of the element to add
 * @param label : label of the element to add
 * @returns {HTMLElement} : return the newly created input element
 */
export function newInput(name, label=name) {
    let inputHTML = `<label style="display: block" for="${name}">${label}:
                    <input id="${name}" name="${name}"></input>
                    </label>`;
    let inputDom = (new DOMParser()).parseFromString(inputHTML, "text/html"); // get the DOM element
    let inputElement = inputDom.getElementById(name);                              // get the container element
    let inputContainer = document.getElementById("input-container");     // get the dom element
    let run = document.getElementById("run");                            // run button
    inputContainer.insertBefore(inputDom.body.firstChild, run);                    // insert specified html before the element
    return inputElement;
}