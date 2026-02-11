const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = Number(input[0]);

const parent = Array(N + 1).fill(-1);

const queue = [N];
parent[N] = N

let head = 0;

let result = []

while (head < queue.length) {
    const curr = queue[head++];

    if (curr === 1) {
        let num = 1;
        while (num < N) {
            result.push(num);
            num = parent[num];
        }
        result.push(N)
        break;
    }

    if (curr % 3 === 0 && parent[curr / 3] === -1) {
        queue.push(curr / 3);
        parent[curr / 3] = curr;
    }

    if (curr % 2 === 0 && parent[curr / 2] === -1) {
        queue.push(curr / 2);
        parent[curr / 2] = curr;
    }

    if (parent[curr - 1] === -1) {
        queue.push(curr - 1);
        parent[curr - 1] = curr;
    }
}

console.log(result.length - 1);
console.log(result.reverse().join(" "));