function bfs(start, graph, n) {
    const visited = new Array(n + 1).fill(false);
    const queue = [start];
    visited[start] = true;
    let idx = 0;

    while (idx < queue.length) {
        const node = queue[idx++];

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
    
    return idx;
}

function solution(n, wires) {
    let minDiff = n; 

    for (let i = 0; i < wires.length; i++) {
        const graph = Array.from({ length: n + 1 }, () => []);
        
        for (let j = 0; j < wires.length; j++) {
            if (i === j) continue; 
            
            const [v1, v2] = wires[j];
            graph[v1].push(v2);
            graph[v2].push(v1);
        }
        
        const countA = bfs(wires[i][0], graph, n);
        const countB = n - countA;
        const diff = Math.abs(countA - countB);

        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}