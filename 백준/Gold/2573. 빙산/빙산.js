const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const [N, M] = input[0].split(" ").map(Number);
let map = input.slice(1).map(line => line.split(" ").map(Number));

let year = 0;

while (true) {
    let icebergCount = 0;
    const visited = Array.from({ length: N }, () => Array(M).fill(false));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (map[i][j] > 0 && !visited[i][j]) {
                icebergCount++;
                bfs(i, j, visited);
            }
        }
    }

    if (icebergCount >= 2) {
        console.log(year);
        break;
    }
    if (icebergCount === 0) {
        console.log(0);
        break;
    }

    melt();
    year++;
}

function bfs(si, sj, visited) {
    const queue = [[si, sj]];
    visited[si][sj] = true;
    let head = 0;
    while (head < queue.length) {
        const [r, c] = queue[head++];
        for (const [dr, dc] of directions) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < N && nc >= 0 && nc < M && map[nr][nc] > 0 && !visited[nr][nc]) {
                visited[nr][nc] = true;
                queue.push([nr, nc]);
            }
        }
    }
}

function melt() {
    const nextMap = Array.from({ length: N }, () => Array(M).fill(0));
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < M; c++) {
            if (map[r][c] > 0) {
                let water = 0;
                for (const [dr, dc] of directions) {
                    const nr = r + dr, nc = c + dc;
                    if (map[nr][nc] === 0) water++;
                }
                nextMap[r][c] = Math.max(0, map[r][c] - water);
            }
        }
    }
    map = nextMap;
}