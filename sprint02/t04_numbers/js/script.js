function checkDivision(beginRange, endRange) {
    if (beginRange == undefined || endRange == undefined || beginRange.length == 0 || endRange.length == 0) {
        beginRange = 1;
        endRange = 100;
    }
    for (let i = beginRange; i <= endRange; i++) {
        let string = new String(i);
        let commas = 0;
        if (i % 2 == 0) {
            string += ' is even'
            commas++;
        }
        if (i % 3 == 0) {
            if (commas > 0) string += ", a multiple of 3";
            else {
                string += " is a multiple of 3";
                commas++;
            }
        }
        if (i % 10 == 0) {
            if (commas > 0) string += ", a multiple of 10";
            else {
                string += " is a multiple of 10";
                commas++;
            }
        }
        if (commas == 0) {
            string += " -";
        }
        console.log(string);
    }
}

let begin = prompt("Type begin of range: ");
let end = prompt("Type end of range: ");
checkDivision(begin, end);