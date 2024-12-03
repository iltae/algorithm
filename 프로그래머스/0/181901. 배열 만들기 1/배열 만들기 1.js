function solution(n, k) {
    const answer = [];
    let count = k;
    while(k <= n) {
        answer.push(k);
        k += count;
    }
    return answer;
}