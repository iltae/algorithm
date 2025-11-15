function solution(n, paths, gates, summits) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, w] of paths) {
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    }
    
    const summitSet = new Set(summits);
    summits.sort((a, b) => a - b);

    const gateSet = new Set(gates);

    function bfsCheck(maxIntensity) {
        const visited = new Array(n + 1).fill(false);
        const queue = [];
        const reachableSummits = [];

        for (const gate of gates) {
            queue.push(gate);
            visited[gate] = true;
        }

        let head = 0;
        while (head < queue.length) {
            const currentNode = queue[head++];

            for (const [nextNode, cost] of graph[currentNode]) {

                if (cost > maxIntensity) {
                    continue;
                }
                
                if (visited[nextNode]) {
                    continue;
                }
                
                visited[nextNode] = true;

                if (summitSet.has(nextNode)) {
                    reachableSummits.push(nextNode);
                    continue;
                }
                
                queue.push(nextNode);
            }
        }
        
        return reachableSummits;
    }

    let left = 1, right = 10000000;
    let answer = [Infinity, Infinity]; 

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        const reachableSummits = bfsCheck(mid);

        if (reachableSummits.length > 0) {
            const minSummit = Math.min(...reachableSummits);
            
            if (mid < answer[1] || (mid === answer[1] && minSummit < answer[0])) {
                 answer = [minSummit, mid];
            }
           
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return answer;
}