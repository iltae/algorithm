const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);
const N = Number(input[0]);

const nodes = [];

for (let i = 1; i <= N; i++) {
  nodes.push(input[i].split(" ").map(Number));
}

const W = Array.from({ length: N }, () => Array(N).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const dist = Math.sqrt(
      Math.pow(nodes[i][0] - nodes[j][0], 2) +
        Math.pow(nodes[i][1] - nodes[j][1], 2),
    );

    W[i][j] = dist;
  }
}

const dp = Array.from({ length: N }, () => Array(1 << N).fill(-1));

function move(curr, visited) {
  if (visited === (1 << N) - 1) return W[curr][0];

  if (dp[curr][visited] !== -1) return dp[curr][visited];

  let minForce = Infinity;

  for (let next = 0; next < N; next++) {
    if (!(visited & (1 << next))) {
      const nextDist = move(next, visited | (1 << next)) + W[curr][next];
      minForce = Math.min(minForce, nextDist);
    }
  }

  return (dp[curr][visited] = minForce);
}

console.log(move(0, 1).toFixed(6));