function solution(myString, pat) {
    const strLen = myString.length, patLen = pat.length;
    let answer = '';
    for(let i = strLen - patLen; i >= 0; i--) {
        if(myString.slice(i, i + patLen) === pat) {
            answer = myString.slice(0, i + patLen);
            break;
        }
    }
    return answer;
}