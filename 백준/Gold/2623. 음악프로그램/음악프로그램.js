const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);

const adj = Array.from({ length: N + 1 }, () => []);
const degree = Array(N + 1).fill(0);

for (let i = 1; i <= M; i++) {
    const [count, ...singers] = input[i].split(" ").map(Number);

    for (let j = 0; j < count - 1; j++) {
        const u = singers[j];
        const v = singers[j + 1];
        adj[u].push(v);
        degree[v]++;
    }
}

const queue = [];

for (let i = 1; i <= N; i++) {
    if (degree[i] === 0) {
        queue.push(i);
    }
}

let head = 0;

const results = [];

while (head < queue.length) {
    const curr = queue[head++];

    results.push(curr);

    for (const next of adj[curr]) {
        degree[next]--;

        if (degree[next] === 0) {
            queue.push(next);
        }
    }
}

if (results.length === N) {
    console.log(results.join("\n"));
} else {
    console.log(0)
}