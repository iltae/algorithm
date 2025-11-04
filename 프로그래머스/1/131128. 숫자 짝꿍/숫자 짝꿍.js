function solution(X, Y) {
    let answer = "";
    const countX = Array(10).fill(0);
    const countY = Array(10).fill(0);

    for (const char of X) {
        countX[Number(char)]++;
    }

    for (const char of Y) {
        countY[Number(char)]++;
    }

    const builder = [];

    for (let i = 9; i >= 0; i--) {
        const commonCount = Math.min(countX[i], countY[i]);
        
        if (commonCount > 0) {
             builder.push(String(i).repeat(commonCount));
        }
    }

    answer = builder.join('');

    if (answer === "") {
        return "-1";
    }
    
    if (answer[0] === "0") {
        return "0";
    }

    return answer;
}