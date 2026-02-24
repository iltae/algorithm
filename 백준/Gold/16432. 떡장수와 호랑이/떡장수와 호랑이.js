const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = Number(input[0]);
const riceCakes = [];

for (let i = 1; i <= N; i++) {
    riceCakes.push(input[i].split(" ").map(Number).slice(1));
}

// visited[날짜][떡종류]
const visited = Array.from({ length: N }, () => Array(10).fill(false));
let isEnd = false;
const result = [];

function dfs(day, lastRiceCake) {
    if (isEnd) return;

    if (day === N) {
        isEnd = true;
        console.log(result.join("\n"));
        return;
    }

    for (const cake of riceCakes[day]) {
        if (cake !== lastRiceCake && !visited[day][cake]) {
            visited[day][cake] = true;
            result.push(cake);
            dfs(day + 1, cake);
            if (isEnd) return;
            result.pop();
        }
    }
}

dfs(0, 0);

if (!isEnd) console.log(-1);