function solution(k, m, score) {
    let answer = 0, len = score.length;
    score.sort((a, b) => b - a);
    for(let i = 0; i <= len - (len % m) - m; i += m) {
        answer += score[i + m - 1] * m;
    }
    return answer;
}