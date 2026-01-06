function solution(info, n, m) {
    const L = info.length;
    
    let dp = new Array(m).fill(Infinity);
    dp[0] = 0;

    for (const [aTrace, bTrace] of info) {
        let nextDp = new Array(m).fill(Infinity);
        
        for (let bSum = 0; bSum < m; bSum++) {
            if (dp[bSum] === Infinity) continue;

            // 1. A가 훔치는 경우
            if (dp[bSum] + aTrace < n) {
                nextDp[bSum] = Math.min(nextDp[bSum], dp[bSum] + aTrace);
            }

            // 2. B가 훔치는 경우
            if (bSum + bTrace < m) {
                nextDp[bSum + bTrace] = Math.min(nextDp[bSum + bTrace], dp[bSum]);
            }
        }
        dp = nextDp;
    }

    let answer = Math.min(...dp);
    
    return answer === Infinity ? -1 : answer;
}