const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const map = [];
const coordinates = [];

for (let i = 0; i < 9; i++) {
    const lines = input[i].split(" ").map(Number);
    map.push(lines);

    for (let j = 0; j < 9; j++) {
        if (lines[j] === 0) coordinates.push([i, j]);
    }
}

function isValid(r, c, num) {
    for (let i = 0; i < 9; i++) {
        if (map[i][c] === num) return false;
        if (map[r][i] === num) return false;

        const nr = Math.floor(r / 3) * 3;
        const nc = Math.floor(c / 3) * 3;
        if (map[nr + Math.floor(i / 3)][nc + (i % 3)] === num) return false;
    }

    return true;
}

function dfs(count) {
    if (count === coordinates.length) {
        for (let i = 0; i < 9; i++) {
            console.log(map[i].join(" "));
        }
        process.exit();
    }

    const [r, c] = coordinates[count];

    for (let i = 1; i <= 9; i++) {
        if (isValid(r, c, i)) {
            map[r][c] = i;
            dfs(count + 1);
            map[r][c] = 0;
        }
    }
}

dfs(0);