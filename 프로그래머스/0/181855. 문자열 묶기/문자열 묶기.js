function solution(strArr) {
    var answer = [1];
    strArr = strArr.map(el => el.length).sort((a, b) => a - b);
    for(let i = 1; i < strArr.length; i++) {
        if(strArr[i] === strArr[i-1]) {
            answer[answer.length-1]++;
        } else {
            answer.push(1);
        }
    }
    return answer.sort((a, b) => b- a)[0];
}