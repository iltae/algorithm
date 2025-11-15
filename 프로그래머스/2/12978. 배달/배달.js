function solution(N, road, K) {
    const dist = Array(N + 1).fill(Infinity);
    
    const graph = Array.from({ length: N + 1 }, () => []);
    
    for (const [a, b, cost] of road) {
        graph[a].push([b, cost]);
        graph[b].push([a, cost]);
    }
    
    dist[1] = 0;
    
    const visited = new Array(N + 1).fill(false);

    for (let i = 0; i < N; i++) {
        
        let minCost = Infinity;
        let currentNode = -1;
        
        for (let j = 1; j <= N; j++) {
            if (!visited[j] && dist[j] < minCost) {
                minCost = dist[j];
                currentNode = j;
            }
        }

        if (currentNode === -1) break;

        visited[currentNode] = true;
        
        for (const [neighbor, cost] of graph[currentNode]) {
            const newCost = dist[currentNode] + cost;

            if (newCost < dist[neighbor]) {
                dist[neighbor] = newCost;
            }
        }
    }
    
    let answer = 0;
    for (let i = 1; i <= N; i++) {
        if (dist[i] <= K) {
            answer++;
        }
    }
    
    return answer;
}