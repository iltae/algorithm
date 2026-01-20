const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const str1 = input[0];
const str2 = input[1];

const n = str1.length, m = str2.length;

const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(""));

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        if (str1[i - 1] === str2[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
        } else {
            if (dp[i][j - 1].length >= dp[i - 1][j].length) {
                dp[i][j] = dp[i][j - 1];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
}

console.log(dp[n][m].length);

if (dp[n][m].length > 0) {
    console.log(dp[n][m]);
}
