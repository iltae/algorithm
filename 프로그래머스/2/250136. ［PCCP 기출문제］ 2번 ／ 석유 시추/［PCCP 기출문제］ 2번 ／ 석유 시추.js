function solution(land) {
    const n = land.length, m = land[0].length;
    const direction = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const ground = Array(m).fill(0);

    function bfs(row, col) {
        const queue = [[row, col]];
        const cur = [];
        visited[row][col] = true;
        cur.push(col);
        
        while (queue.length > 0) {
            const [x, y] = queue.shift();

            for (let [dx, dy] of direction) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && land[nx][ny] === 1) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                    cur.push(ny);
                }
            }
        }
        
        return cur;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (land[i][j] && !visited[i][j]) {
                const cur = bfs(i, j);
                const amount = cur.length;
                const temp = new Set(cur);
                for (let col of [...temp]) {
                        ground[col] += amount;
                }
            }
        }
    }

    return Math.max(...ground);
}
