function solution(n) {
    let answer = 1;
    while(answer ** 2 < n) {
        answer++;
    }
    return answer ** 2 === n ? (answer + 1) ** 2 : -1;
}