const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const N = input[0].split(" ").map(Number);
const map = input.slice(1).map(line => line.split(""));
const blindMap = map.map(line => line.map(el => el === 'G' ? 'R' : el));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const blindVisited = Array.from({ length: N }, () => Array(N).fill(false));

let count = 0;
let blindCount = 0;

function bfs(i, j, color, map, visited) {
    const queue = [[i, j]];
    let head = 0;

    visited[i][j] = true;

    while (head < queue.length) {
        const [r, c] = queue[head++];

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nc >= 0 && nr < N && nc < N && !visited[nr][nc] && map[nr][nc] === color) {
                visited[nr][nc] = true;
                queue.push([nr, nc]);
            }
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
            count++;
            bfs(i, j, map[i][j], map, visited);
        }
        if (!blindVisited[i][j]) {
            blindCount++;
            bfs(i, j, blindMap[i][j], blindMap, blindVisited);
        }
    }
}

console.log(count + " " + blindCount);