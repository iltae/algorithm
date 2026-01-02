function solution(n, lighthouse) {
    const adj = Array.from({ length: n + 1 }, () => []);
    const degree = new Array(n + 1).fill(0);
    
    for (const [u, v] of lighthouse) {
        adj[u].push(v);
        adj[v].push(u);
        degree[u]++;
        degree[v]++;
    }

    const dp = Array.from({ length: n + 1 }, () => [0, 1]);
    const visited = new Array(n + 1).fill(false);
    
    const queue = [];
    
    for (let i = 1; i <= n; i++) {
        if (degree[i] === 1) {
            queue.push(i);
        }
    }

    let head = 0;
    
    while (head < queue.length) {
        const u = queue[head++];
        visited[u] = true;

        for (const v of adj[u]) {
            if (!visited[v]) {
                dp[v][0] += dp[u][1];
                dp[v][1] += Math.min(dp[u][0], dp[u][1]);

                degree[v]--;
                
                if (degree[v] === 1) {
                    queue.push(v);
                }
            }
        }
    }
    
    const lastNode = queue[queue.length - 1];
    return Math.min(dp[lastNode][0], dp[lastNode][1]);
}