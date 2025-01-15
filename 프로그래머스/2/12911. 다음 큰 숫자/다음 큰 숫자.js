function solution(n) {
    const nCount = count(n);
    let answer = n + 1;
    while(count(answer) !== nCount) {
        answer++;
    }
    return answer;
}

function count(n) {
    return n.toString(2).split("").filter(el => el === "1").length
}