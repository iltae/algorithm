const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let minSum = Infinity;
let minCombi = []

arr.sort((a, b) => a - b);

for (let i = 0; i < N - 1; i++) {
    let left = i + 1;
    let right = N - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sum = arr[i] + arr[mid];

        if (Math.abs(sum) < Math.abs(minSum)) {
            minSum = sum;
            minCombi = [arr[i], arr[mid]];
        }

        if (sum > 0) {
            right = mid - 1;
        } else if (sum < 0) {
            left = mid + 1;
        } else {
            console.log([arr[i], arr[mid]].join(" "));
            return;
        }
    }
}

console.log(minCombi.join(" "))