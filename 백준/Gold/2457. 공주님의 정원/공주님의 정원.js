const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);
const N = Number(input[0]);
const flowers = input.slice(1).map(line => {
    const v = line.split(" ").map(Number);
    return [v[0] * 100 + v[1], v[2] * 100 + v[3]];
});

flowers.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

let count = 0;
let currentEnd = 301;
let maxEnd = 0;
let idx = 0;

while (currentEnd <= 1130) {
    let possible = false;

    for (let i = idx; i < N; i++) {
        if (flowers[i][0] > currentEnd) break;

        if (flowers[i][1] > maxEnd) {
            maxEnd = flowers[i][1];
            idx = i + 1;
            possible = true;
        }
    }

    if (possible) {
        currentEnd = maxEnd;
        count++;
    } else {
        break;
    }
}

if (currentEnd <= 1130) {
    console.log(0);
} else {
    console.log(count);
}