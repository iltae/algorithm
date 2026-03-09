const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const [X, Y, D, T] = input[0].split(" ").map(Number);

const dist = Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2));

let minTime = 0;

if (T >= D) {
    minTime = dist;
} else {
    const jumps = Math.floor(dist / D);

    if (jumps > 0) {
        const remain = dist - (jumps * D);
        const over = (jumps + 1) * D - dist;
        minTime = Math.min(dist, jumps * T + remain, (jumps + 1) * T + over, (jumps + 1) * T);
    } else {
        minTime = Math.min(dist, T + (D - dist), T * 2);
    }
}

console.log(minTime.toFixed(9));