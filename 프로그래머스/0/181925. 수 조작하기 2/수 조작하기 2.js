function solution(numLog) {
    const answer = [];
    for(let i = 1; i < numLog.length; i++) {
        let diff = numLog[i] - numLog[i-1];
        switch (diff) {
            case 1 : answer.push('w'); break;
            case -1 : answer.push('s'); break;
            case 10: answer.push('d'); break;
            case -10: answer.push('a'); break;
        }
    }
    return answer.join("")
}