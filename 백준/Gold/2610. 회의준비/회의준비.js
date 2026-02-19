const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = Number(input[0]);
const M = Number(input[1]);

const parent = Array.from({ length: N + 1 }, (_, idx) => idx);
const dist = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity))

function find(x) {
    if (parent[x] === x) return x;
    return parent[x] = find(parent[x]);
}

function union(a, b) {
    const rootA = find(a);
    const rootB = find(b);

    if (rootA !== rootB) {
        if (rootA < rootB) parent[rootB] = rootA;
        else parent[rootA] = rootB;
    }
}

for (let i = 2; i <= M + 1; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    union(a, b);
    dist[a][b] = 1;
    dist[b][a] = 1;
}

for (let i = 1; i <= N; i++) dist[i][i] = 0;

for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            if (dist[i][j] > dist[i][k] + dist[k][j]) {
                dist[i][j] = dist[i][k] + dist[k][j];
            }
        }
    }
}

const representatives = [];
const visitedRoot = new Set();

for (let i = 1; i <= N; i++) {
    const root = find(i);

    if (visitedRoot.has(root)) continue;

    let bestLeader = i;
    let minMaxDist = Infinity;

    for (let member = 1; member <= N; member++) {
        if (find(member) === root) {
            let maxDist = 0;
            for (let target = 1; target <= N; target++) {
                if (find(target) === root && dist[member][target] !== Infinity) {
                    maxDist = Math.max(maxDist, dist[member][target]);
                }
            }

            if (maxDist < minMaxDist) {
                minMaxDist = maxDist;
                bestLeader = member;
            }
        }
    }

    representatives.push(bestLeader);
    visitedRoot.add(root);
}

console.log(representatives.length);
console.log(representatives.sort((a, b) => a - b).join('\n'));