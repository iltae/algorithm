function solution(n, computers) {
    let answer = 0;
    const visited = Array(n).fill(false);

    const bfs = (startNode) => {
        const queue = [startNode];
        visited[startNode] = true;

        while (queue.length > 0) {
            const cur = queue.shift();

            for (let next = 0; next < n; next++) {
                if (computers[cur][next] === 1 && !visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            }
        }
    };

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            answer++;
            bfs(i);
        }
    }

    return answer;
}