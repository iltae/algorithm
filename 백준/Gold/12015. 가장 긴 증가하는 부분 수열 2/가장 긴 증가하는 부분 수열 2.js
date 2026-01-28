const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const result = [arr[0]];

for (let i = 1; i < N; i++) {
    const cur = arr[i];

    if (cur > result[result.length - 1]) {
        result.push(cur);
    } else {
        const idx = findPosition(cur);
        result[idx] = cur;
    }
}

function findPosition(num) {
    let left = 0;
    let right = result.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (result[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;

}

console.log(result.length)