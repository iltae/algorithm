function solution(n, infection, edges, k) {
    // 1. 인접 리스트 구성
    const adj = Array.from({ length: n + 1 }, () => ({ 1: [], 2: [], 3: [] }));
    
    for (const [x, y, type] of edges) {
        adj[x][type].push(y);
        adj[y][type].push(x);
    }

    let maxInfected = 0;

    // 2. 파이프를 여는 순서에 따른 DFS
    function solve(currentInfected, count) {
        // 현재까지 감염된 개수 계산 및 갱신
        const currentCount = currentInfected.reduce((acc, val) => acc + (val ? 1 : 0), 0);
        maxInfected = Math.max(maxInfected, currentCount);

        // k번 다 열었거나 모든 노드가 감염되었으면 종료
        if (count === k || currentCount === n) return;

        // 3. 세 종류의 파이프 중 하나를 선택
        for (let type = 1; type <= 3; type++) {
            const nextInfected = [...currentInfected];
            let changed = false;

            // BFS로 해당 타입 파이프를 통해 확산
            const queue = [];
            for (let i = 1; i <= n; i++) {
                if (nextInfected[i]) queue.push(i);
            }

            let head = 0;
            while(head < queue.length) {
                const curr = queue[head++];
                for (const next of adj[curr][type]) {
                    if (!nextInfected[next]) {
                        nextInfected[next] = true;
                        queue.push(next);
                        changed = true;
                    }
                }
            }

            // 만약 이번 파이프를 열어서 새로 감염된 노드가 있다면 다음 단계로
            if (changed) {
                solve(nextInfected, count + 1);
            }
        }
    }

    const initialInfected = Array(n + 1).fill(false);
    initialInfected[infection] = true;
    solve(initialInfected, 0);

    return maxInfected;
}