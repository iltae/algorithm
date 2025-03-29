function solution(name) {
    let answer = 0, n = name.length;
    
    for (let i = 0; i < n; i++) {
        const char = name[i];
        const diff = char.charCodeAt(0) - 'A'.charCodeAt(0);
        answer += Math.min(diff, 26 - diff);
    }
    
    let minMove = n - 1;
    
    for (let i = 0; i < n; i++) {
        let next = i + 1;
        
        while (next < n && name[next] === 'A') {
            next++;
        }
        
        minMove = Math.min(minMove, i + (n - next) + Math.min(i, n - next));
    }
    
    // 최종 답 계산 (알파벳 변경 횟수 + 커서 이동 횟수)
    answer += minMove;
    
    return answer;
}
