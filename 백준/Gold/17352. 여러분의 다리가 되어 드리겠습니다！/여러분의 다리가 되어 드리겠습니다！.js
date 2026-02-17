const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);
const N = Number(input[0]);

const parent = Array.from({ length: N + 1 }, (_, idx) => idx);

function find(x) {
  if (parent[x] === x) return x;
  return (parent[x] = find(parent[x]));
}

function union(a, b) {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA !== rootB) {
    if (rootA < rootB) {
      parent[rootB] = rootA;
    } else {
      parent[rootA] = rootB;
    }
  }
}

for (let i = 1; i <= N - 2; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  union(u, v);
}

const rootOne = find(1);

for (let i = 2; i <= N; i++) {
  if (find(i) !== rootOne) {
    console.log(1, i);
    break;
  }
}