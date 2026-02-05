const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const [n, E, W, S, N] = input[0].split(" ").map(Number);

const visited = Array.from({ length: 30 }, () => Array(30).fill(false));
const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];
const percent = [E / 100, W / 100, S / 100, N / 100];

let totalPercent = 0;

function dfs(x, y, count, currPercent) {
    if (count === n) {
        totalPercent += currPercent;
        return;
    }

    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
        const [dx, dy] = directions[i];
        const nx = x + dx;
        const ny = y + dy;

        if (!visited[nx][ny]) {
            dfs(nx, ny, count + 1, currPercent * percent[i]);
        }
    }

    visited[x][y] = false;
}

dfs(14, 14, 0, 1);

console.log(totalPercent.toFixed(10));