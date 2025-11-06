function solution(maps) {
    const R = maps.length;
    const C = maps[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    let S, L, E;

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (maps[r][c] === 'S') S = [r, c];
            if (maps[r][c] === 'L') L = [r, c];
            if (maps[r][c] === 'E') E = [r, c];
        }
    }
    
    const bfs = (start, end) => {
        const visited = Array.from({ length: R }, () => Array(C).fill(false));
        const queue = [];
        queue.push([...start, 0]);
        visited[start[0]][start[1]] = true;

        let idx = 0;

        while (queue[idx]) {
            const [r, c, cost] = queue[idx++];

            if (r === end[0] && c === end[1]) {
                return cost;
            }

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < R && nc >= 0 && nc < C && !visited[nr][nc] && maps[nr][nc] !== 'X') {
                    visited[nr][nc] = true;
                    queue.push([nr, nc, cost + 1]);
                }
            }
        }

        return -1;
    };

    const timeToLever = bfs(S, L);
    const timeToExit = bfs(L, E);

    if (timeToLever === -1 || timeToExit === -1) {
        return -1;
    } else {
        return timeToLever + timeToExit;
    }
}