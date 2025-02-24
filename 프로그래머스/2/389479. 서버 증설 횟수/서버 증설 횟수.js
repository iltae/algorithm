function solution(players, m, k) {
    let answer = 0;
    
    for(let i = 0; i < players.length; i++) {
        if(players[i] >= m) {
            
            const count = Math.floor(players[i] / m);
            answer += count;
            
            for(let j = i + 1; j < i + k; j++) {
                if(j < players.length) {
                    players[j] -= count * m;
                }
            }
        }
    }
    return answer;
}