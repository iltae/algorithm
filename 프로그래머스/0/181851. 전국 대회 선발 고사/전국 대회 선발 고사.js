function solution(rank, attendance) {
    const answer = rank.map((el, idx) => [el, idx]).filter(([el, idx]) => attendance[idx]).sort((a, b) => a[0] - b[0]);
    return answer[0][1] * 10000 + answer[1][1] * 100 + answer[2][1];
}