const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);
const map = [];
const coordinates = []; // 빈 공간 좌표 저장
const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

for (let i = 1; i <= N; i++) {
    const lines = input[i].split(" ").map(Number);
    map.push(lines);

    for (let j = 0; j < lines.length; j++) {
        if (lines[j] === 0) {
            coordinates.push([i - 1, j]);
        }
    }
}

function getCombinations(arr, n) {
    const results = [];

    if (n === 1) return arr.map(el => [el]);

    arr.forEach((fix, idx, org) => {
        const rest = arr.slice(idx + 1);
        const combinations = getCombinations(rest, n - 1);
        const attached = combinations.map((el) => [fix, ...el]);
        results.push(...attached);
    })

    return results;
}

const combinations = getCombinations(coordinates, 3); // 벽 3개를 세울 수 있는 좌표 조합

function spreadVirus(arr, i, j) {
    const queue = [[i, j]];
    let idx = 0;

    while (idx < queue.length) {
        const [r, c] = queue[idx++];

        for (const direction of directions) {
            const nr = r + direction[0];
            const nc = c + direction[1];

            if (nr < 0 || nc < 0 || nr >= N || nc >= M) continue;

            if (arr[nr][nc] === 0) {
                arr[nr][nc] = 2;
                queue.push([nr, nc]);
            }
        }
    }
}

let maxSafetyArea = 0;

for (const combination of combinations) {
    const tempMap = JSON.parse(JSON.stringify(map));
    let safetyArea = 0;

    combination.forEach(([r, c]) => tempMap[r][c] = 1);

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (tempMap[i][j] === 2) {
                spreadVirus(tempMap, i, j);
            }
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (tempMap[i][j] === 0) safetyArea++;
        }
    }

    maxSafetyArea = Math.max(maxSafetyArea, safetyArea);
}

console.log(maxSafetyArea);