const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const [R, C] = input[0].split(" ").map(Number);
const maps = input.slice(1).map(line => line.split(""));
const queue = [];

for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
        if (maps[i][j] === 'W') queue.push([i, j]);
    }
}

let head = 0;
let possible = true;

while (head < queue.length) {
    const [r, c] = queue[head++];

    for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr < 0 || nc < 0 || nr >= R || nc >= C) continue;

        if (maps[nr][nc] === 'S') {
            possible = false;
            break;
        }

        if (maps[nr][nc] === '.') {
            maps[nr][nc] = 'D';
        }
    }

    if (!possible) break;
}

if (!possible) {
    console.log(0);
} else {
    console.log(1);
    console.log(maps.map(line => line.join("")).join("\n"));
}