function operation([el1, operator, el2]) {
    switch(operator) {
        case "+" : return +el1 + +el2; break;
        case "-" : return el1 - el2; break;
        case "*" : return el1 * el2; break;
    }
}

function solution(binomial) {
    return operation(binomial.split(" "));
}