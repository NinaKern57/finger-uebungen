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

/**
 * Create a download link for a specific kind of data.
 * @param filename      : name of the file
 * @param textContent   : text content of the file
 * @param mimeType      : MIME type of the file
 */
export function download(filename, textContent, mimeType="text/plain") {
    let pseudoLink = document.createElement('a');
    pseudoLink.setAttribute('href',
        `data:${mimeType};charset=utf-8,${encodeURIComponent(textContent)}` );
    pseudoLink.setAttribute('download', filename);
    if (document.createEvent) {
        let event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pseudoLink.dispatchEvent(event);
    } else {
        pseudoLink.click();
    }
}

export function newClickButton(name, action, label=name) {
    let buttonHTML =
        `<span style="display: block">
         <button type="button" id="${name}" name="${name}">${label}</button>
         </span>`;
    let buttonDOM = (new DOMParser()).parseFromString(buttonHTML, "text/html");
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