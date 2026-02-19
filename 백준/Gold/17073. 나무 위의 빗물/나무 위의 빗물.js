const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, W] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < N; i++) {
    const [U, V] = input[i].split(" ").map(Number);
    graph[U].push(V);
    graph[V].push(U);
}

const visited = Array(N + 1).fill(false);

const queue = [1];
visited[1] = true;

let head = 0;
let count = 0;

while (head < queue.length) {
    const curr = queue[head++];

    let isNodeExist = false;

    for (const next of graph[curr]) {
        if (visited[next]) continue;
        isNodeExist = true;
        queue.push(next);
        visited[next] = true;
    }

    if (!isNodeExist) {
        count++;
    }
}

console.log((W / count).toFixed(4))