function solution(n, roads, sources, destination) {
    const connection = Array.from({ length: n + 1}, () => [])
    
    roads.forEach(road => {
        const [v1, v2] = road;
        connection[v1].push(v2);
        connection[v2].push(v1);
    })
    
    const minDepth = Array(n + 1).fill(-1);
    
    const queue = [[destination, 0]];
    let idx = 0;
    
    while(idx < queue.length) {
        const [area, depth] = queue[idx++];

        if (minDepth[area] === -1) {
            minDepth[area] = depth
        }
        
        for (const next of connection[area]) {
            if (minDepth[next] === -1) {
                queue.push([next, depth + 1]);
            }
        }
    }
    
    return sources.map(source => minDepth[source]);
}