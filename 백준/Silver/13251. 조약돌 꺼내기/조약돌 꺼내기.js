const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const M = Number(input[0]);
const stones = input[1].split(" ").map(Number);
const K = Number(input[2]);
const N = stones.reduce((acc, cur) => acc + cur, 0);

function combination(n, k) {
    if (n < k) return 0;

    const denom = Math.min(k, n - k);
    let result = 1;

    for (let i = 1; i <= denom; i++) {
        result *= n + 1 - i;
        result /= i;
    }

    return result;
}

const result = stones.reduce((acc, cur) => acc + combination(cur, K), 0) / combination(N, K);

console.log(result.toFixed(10));