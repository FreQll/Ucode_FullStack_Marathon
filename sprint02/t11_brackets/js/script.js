function checkBrackets(str) {
    if (typeof(str) != "string" || str.length == 0 || str == NaN
        || str.indexOf("(") == -1 && str.indexOf(")")) {
            return -1;
    }

    let result = 0;
    let active_bracket = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] != "(" && str[i] != ")") {
            continue;
        }
        if (active_bracket == 0 && str[i] == ")") {
            result += 1;
            continue;
        }
        if (str[i] == "(") {
            active_bracket++;
            continue;
        }
        if (active_bracket > 0 && str[i] == ")") {
            active_bracket--;
            continue;
        }
    }

    return result + active_bracket;
}

// console.log(checkBrackets('1)()(())2(()'));// 2
// console.log(checkBrackets(NaN));// -1