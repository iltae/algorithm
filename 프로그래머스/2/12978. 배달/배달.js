function solution(N, road, K) {

    const graph = Array.from({ length: N + 1 }, () => []);
    
    for (const [a, b, c] of road) {
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    }
    
    const INF = 500001;
    const dist = Array(N + 1).fill(INF);
    dist[1] = 0;
    
    const pq = [];  // 우선순위 큐 (시간, 마을번호)
    pq.push([0, 1]);
    
    while (pq.length > 0) {
        const [time, node] = pq.shift();
        
        if (time > dist[node]) continue;
        
        for (const [next, travelTime] of graph[node]) {
            const newTime = time + travelTime;
            if (newTime < dist[next]) {
                dist[next] = newTime;
                pq.push([newTime, next]);
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
