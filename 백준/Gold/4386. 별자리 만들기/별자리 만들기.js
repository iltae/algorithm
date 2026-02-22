const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);
const N = Number(input[0]);
const nodes = [];

for (let line = 1; line <= N; line++) {
  const node = input[line].split(" ").map(Number);
  nodes.push(node);
}

const edges = [];

for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    const dist = Math.sqrt(
      Math.pow(nodes[i][0] - nodes[j][0], 2) +
        Math.pow(nodes[i][1] - nodes[j][1], 2),
    );
    edges.push([i, j, dist]);
  }
}

edges.sort((a, b) => a[2] - b[2]);

const parent = Array.from({ length: N }, (_, idx) => idx);

function find(x) {
  if (parent[x] === x) return x;
  return (parent[x] = find(parent[x]));
}

function union(a, b) {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA !== rootB) {
    parent[rootA] = rootB;
    return true;
  }

  return false;
}

let result = 0;
let count = 0;

for (const [u, v, dist] of edges) {
  if (union(u, v)) {
    result += dist;
    count++;
    if (count === N - 1) break;
  }
}

console.log(result.toFixed(3));