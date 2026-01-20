const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

let idx = 0;
const T = Number(input[idx++]);

for (let t = 1; t <= T; t++) {
    const n = input[idx++];
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(input[idx++]);
    }

    arr.sort();

    let match = true;

    for (let i = 1; i < n; i++) {
        if (arr[i].startsWith(arr[i - 1])) {
            match = false;
            break;
        }
    }

    if (match) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}