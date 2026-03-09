const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const [startX, startY] = input[0].split(" ").map(Number);
const [endX, endY] = input[1].split(" ").map(Number);

const n = Number(input[2]);

const cannons = [];

for (let i = 2; i <= n + 2; i++) {
    cannons.push(input[i].split(" ").map(Number));
}

const nodes = [[startX, startY], ...cannons, [endX, endY]];
const V = nodes.length;

function getDistance(n1, n2) {
    return Math.sqrt(Math.pow(n1[0] - n2[0], 2) + Math.pow(n1[1] - n2[1], 2));
}

const dist = Array(V).fill(Infinity);
const visited = Array(V).fill(false);

dist[0] = 0;

for (let i = 0; i < V; i++) {
    let minDist = Infinity;
    let u = -1;

    for (let j = 0; j < V; j++) {
        if (!visited[j] && dist[j] < minDist) {
            minDist = dist[j];
            u = j;
        }
    }

    if (u === -1 || u === V - 1) break;

    visited[u] = true;

    for (let v = 0; v < V; v++) {
        if (u === v || visited[v]) continue;

        const distance = getDistance(nodes[u], nodes[v]);

        let cost = 0;

        if (u === 0) {
            cost = distance / 5.0;
        } else {
            const walk = distance / 5.0;
            const cannon = 2.0 + Math.abs(distance - 50.0) / 5.0;
            cost = Math.min(walk, cannon);
        }

        if (dist[u] + cost < dist[v]) {
            dist[v] = dist[u] + cost;
        }
    }
}

console.log(dist[V - 1].toFixed(4))