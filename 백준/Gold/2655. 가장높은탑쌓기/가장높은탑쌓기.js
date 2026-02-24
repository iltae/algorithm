const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = Number(input[0]);

const stones = [];

for (let i = 1; i <= N; i++) {
    stones.push([...input[i].split(" ").map(Number), i]);
}

stones.sort((a, b) => b[0] - a[0]);

const dp = stones.map(s => s[1]);
const history = Array(N).fill(-1);

for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (stones[i][2] < stones[j][2]) {
            if (dp[i] < dp[j] + stones[i][1]) {
                dp[i] = dp[j] + stones[i][1];
                history[i] = j;
            }
        }
    }
}

let maxH = 0;
let lastIdx = -1;

for (let i = 0; i < N; i++) {
    if (dp[i] > maxH) {
        maxH = dp[i];
        lastIdx = i;
    }
}

const result = [];

while (lastIdx !== -1) {
    result.push(stones[lastIdx][3]);
    lastIdx = history[lastIdx];
}

console.log(result.length);
console.log(result.join("\n"));