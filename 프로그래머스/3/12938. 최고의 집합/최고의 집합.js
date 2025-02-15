function solution(n, s) {
    const answer = [];
    
    if (s < n) return [-1];
    
    let x = Math.floor(s / n), r = s % n;
    
    for (let i = 0; i < r; i++) {
        answer.push(x + 1);
    }
    
    for (let i = 0; i < n - r; i++) {
        answer.push(x);
    }
    
    answer.sort((a, b) => a - b);
    
    return answer;
}
