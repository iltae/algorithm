function solution(n) {
    const answer = [];
    let point = 0, len = n;
    while(len > 0) {
        answer.push(Array(n).fill(0).map((el, idx) => idx === point ? 1 : el));
        len--;
        point++;
    }
    return answer;
}