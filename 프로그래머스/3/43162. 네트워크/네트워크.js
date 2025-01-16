function solution(n, computers) {
    const visited = Array.from({length : n}, () => false);
    let count = 0;
    
    // 해당 컴퓨터 방문 처리 후 연결된 컴퓨터 쭉쭉 방문 처리
    function dfs(node) {
        visited[node] = true;
        for(let next = 0; next < n; next++) {
            if(!visited[next] && computers[node][next]) {
                dfs(next);
            }
        }
    }
    
    // 컴퓨터 하나씩 체크하며 연결된 모든 컴퓨터 체크
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            count++;
            dfs(i);
        }
    }
    
    return count;
}