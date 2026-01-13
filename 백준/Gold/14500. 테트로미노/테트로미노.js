const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const [N, M] = input[0].split(" ").map(Number);
const map = [];
let maxNum = 0;

for (let i = 1; i <= N; i++) {
    const lines = input[i].split(" ").map(Number);
    lines.forEach(num => maxNum = Math.max(maxNum, num));
    map.push(lines);
}

const visited = Array.from({ length: N }, () => Array(M).fill(false));

let maxValue = 0;

function dfs(r, c, dist, sum) {
    if (sum + (4 - dist) * maxNum <= maxValue) {
        return;
    }

    if (dist === 4) {
        maxValue = Math.max(maxValue, sum);
        return
    }

    for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr < 0 || nc < 0 || nr >= N || nc >= M || visited[nr][nc]) continue;

        visited[nr][nc] = true;
        dfs(nr, nc, dist + 1, sum + map[nr][nc]);
        visited[nr][nc] = false;
    }
}

function checkT(r, c) {
    let sum = map[r][c];
    let cnt = 0;
    let minAround = Infinity;

    for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < N && nc >= 0 && nc < M) {
            cnt++;
            sum += map[nr][nc];
            minAround = Math.min(minAround, map[nr][nc]);
        }
    }

    if (cnt === 4) { // 인접한 칸이 4개면 가장 작은 것 하나 제외
        maxValue = Math.max(maxValue, sum - minAround);
    } else if (cnt === 3) { // 인접한 칸이 딱 3개면 그 자체로 'ㅜ' 모양 가능
        maxValue = Math.max(maxValue, sum);
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        visited[i][j] = true;
        dfs(i, j, 1, map[i][j]);
        visited[i][j] = false;
        checkT(i, j);
    }
}

console.log(maxValue);