const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const T = Number(input[0]);
let line = 1;
const results = [];

test: for (let t = 0; t < T; t++) {
    const p = input[line++];
    const n = Number(input[line++]);
    const arr = JSON.parse(input[line++]);

    let left = 0, right = n - 1;
    let direction = 'right';

    for (let i = 0; i < p.length; i++) {
        const command = p[i];

        if (command === 'D') {
            if (left > right) {
                console.log('error');
                continue test;
            }

            if (direction === 'right') {
                left++
            } else {
                right--;
            }
        }

        if (command === 'R') {
            if (direction === 'right') {
                direction = 'left';
            } else {
                direction = 'right';
            }
        }
    }

    let result = arr.slice(left, right + 1);

    if (direction === 'left') {
        result = result.reverse();
    }

    console.log(JSON.stringify(result));
}