function solution(X, Y) {
    const listX = X.split("").sort((a, b) => b - a);
    const listY = Y.split("").sort((a, b) => b - a);
    let answer = "";
    let idxX = 0, idxY = 0;
    while (idxX < listX.length && idxY < listY.length) {
        if (listX[idxX] === listY[idxY]) {
            answer += listX[idxX];
            idxX++;
            idxY++;
        } else if (listX[idxX] > listY[idxY]) {
            idxX++;
        } else {
            idxY++;
        }
    }
    return answer? +answer !== 0 ? answer : "0" : "-1";
}