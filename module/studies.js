/**
 * Hours per week to invest at home
 * @param ects       : Number of ECTS of the lecture
 * @param lecture    : Count of the number of instances of the lecture per week
 * @returns {number} : number of hours
 */
export function calculateHomeworkTime(ects, lecture){
    return (ects*2.0 - lecture*1.5);
}

export function printHomeworkTime(times, total){
    let out = document.getElementById("content");
    let acc = "<table border='1' style='font-family: monospace; text-align: center; font-size: 1.2em;'>";
    for(let lecture of Object.keys(times))
    {
        acc += `<tr><th>${lecture}</th> <td>${times[lecture]} Stunde.</td></tr>`;
    }
    acc += `<tr><th>Total</th><td>${total}</td></tr>`;
    acc += "</table>";
    out.innerHTML = acc;
}

let time = calculateHomeworkTime(5, 3);
console.log(time);