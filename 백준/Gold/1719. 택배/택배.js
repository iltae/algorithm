const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);

const dist = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));
const step = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= M; i++) {
    const [u, v, c] = input[i].split(" ").map(Number);
    dist[u][v] = c;
    dist[v][u] = c;
    step[u][v] = v;
    step[v][u] = u;
}

for (let i = 1; i <= N; i++) dist[i][i] = 0;

for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            if (dist[i][j] > dist[i][k] + dist[k][j]) {
                dist[i][j] = dist[i][k] + dist[k][j];
                step[i][j] = step[i][k];
            }
        }
    }
}

let result = "";

for (let i = 1; i <= N; i++) {
    let row = [];

    for (let j = 1; j <= N; j++) {
        if (i === j) row.push("-");
        else row.push(step[i][j]);
    }
    result += row.join(" ") + "\n";
}

console.log(result.trim());