const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const S = input[0];
const T = input[1];

const n = S.length, m = T.length;

const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

let maxLen = 0;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        if (S[i - 1] === T[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
            maxLen = Math.max(maxLen, dp[i][j]);
        }
    }
}

console.log(maxLen);