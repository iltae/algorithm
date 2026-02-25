const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, M, T, K] = input[0].split(" ").map(Number);
const jewels = [];
const xCoords = [];
const yCoords = [];

for (let i = 1; i <= T; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    jewels.push([x, y]);
    xCoords.push(x);
    yCoords.push(y);
}

let maxCount = -1;
let bestX = 0;
let bestY = 0;

for (const x of xCoords) {
    for (const y of yCoords) {
        let startX = x;
        let startY = y;

        if (startX + K > N) startX = N - K;
        if (startY + K > M) startY = M - K;

        let count = 0;

        for (const [jx, jy] of jewels) {
            if (jx >= startX && jx <= startX + K && jy >= startY && jy <= startY + K) {
                count++;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            bestX = startX;
            bestY = startY + K;
        }
    }
}

console.log(bestX, bestY);
console.log(maxCount);