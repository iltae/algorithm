function solution(n, wires) {
    const graph = Array.from(Array(n + 1), () => []);
    
    for (const [v1, v2] of wires) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    function dfs(node, parent) {
        let size = 1;
        for (const neighbor of graph[node]) {
            if (neighbor !== parent) {
                size += dfs(neighbor, node);
            }
        }
        return size;
    }

    let minDiff = Infinity;
    
    for (const [v1, v2] of wires) {
        const size1 = dfs(v1, v2), size2 = n - size1;
        const diff = Math.abs(size1 - size2);
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}
