function solution(info, n, m) {
    let dp = new Array(m).fill(Infinity);
    dp[0] = 0;

    for (const [aTrace, bTrace] of info) {
        for (let j = m - 1; j >= 0; j--) {
            if (dp[j] === Infinity) continue;

            if (j + bTrace < m) {
                dp[j + bTrace] = Math.min(dp[j + bTrace], dp[j]);
            }
            dp[j] = dp[j] + aTrace;
        }
    }
    
    let filtered = dp.filter(v => v < n);
    
    return filtered.length === 0 ? -1 : Math.min(...filtered);
}