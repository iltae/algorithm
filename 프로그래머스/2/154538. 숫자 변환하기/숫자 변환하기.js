function solution(x, y, n) {
    if (x === y) return 0;

    const dp = Array(y + 1).fill(Infinity);
    dp[x] = 0;

    for (let i = x; i <= y; i++) {
        if (dp[i] === Infinity) continue;

        const nextSteps = [i + n, i * 2, i * 3];

        for (const next of nextSteps) {
            if (next <= y) {
                dp[next] = Math.min(dp[next], dp[i] + 1);
            }
        }
    }

    return dp[y] === Infinity ? -1 : dp[y];
}