function cart(grid, target, n, m) {
    const toRemove = [];
    const visited = Array.from({ length: n + 2 }, () => Array(m + 2).fill(false));
    const queue = [[0, 0]];
    visited[0][0] = true;

    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    let head = 0;
    while (head < queue.length) {
        const [r, c] = queue[head++];

        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];

            if (nr >= 0 && nr < n + 2 && nc >= 0 && nc < m + 2 && !visited[nr][nc]) {
                if (grid[nr][nc] === '.' || grid[nr][nc] === ' ') {
                    visited[nr][nc] = true;
                    queue.push([nr, nc]);
                } else if (grid[nr][nc] === target) {
                    visited[nr][nc] = true;
                    toRemove.push([nr, nc]);
                }
            }
        }
    }

    toRemove.forEach(([r, c]) => grid[r][c] = ' ');
    
    return grid;
}

function crane(grid, target, n, m) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (grid[i][j] === target) {
                grid[i][j] = ' ';
            }
        }
    }
    return grid;
}

function solution(storage, requests) {
    const n = storage.length;
    const m = storage[0].length;

    let grid = Array.from({ length: n + 2 }, (_, i) => {
        if (i === 0 || i === n + 1) return Array(m + 2).fill('.');
        return ['.', ...storage[i - 1].split(''), '.'];
    });

    requests.forEach(request => {
        if (request.length === 1) {
            grid = cart(grid, request, n, m);
        } else {
            grid = crane(grid, request[0], n, m);
        }
    });

    let answer = 0;
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (grid[i][j] !== ' ' && grid[i][j] !== '.') answer++;
        }
    }

    return answer;
}