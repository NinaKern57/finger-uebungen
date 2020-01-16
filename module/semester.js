import {calculateHomeworkTime, printHomeworkTime} from "./studies.js";

let semester1 = {"Javascript":{"ects":4, "lectures":2.5},
                "Programmierung 1":{"ects":8, "lectures":2},
                "Datenbanken":{"ects":6, "lectures":2.5}};

export function calculateWeeklyHomeworkTime(lectures){
    let acc = 0;
    let out = {};
    for(let lecture of Object.keys(lectures))
    {
        acc += calculateHomeworkTime(lectures[lecture].ects, lectures[lecture].lectures);
        out[lecture] = calculateHomeworkTime(lectures[lecture].ects, lectures[lecture].lectures);
    }
    return [out, acc];
}

printHomeworkTime(calculateWeeklyHomeworkTime(semester1)[0], calculateWeeklyHomeworkTime(semester1)[1]);