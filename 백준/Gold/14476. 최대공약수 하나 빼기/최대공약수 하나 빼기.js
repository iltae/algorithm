const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

function gcd(a, b) {
    while (b !== 0) {
        const temp = a % b;
        a = b;
        b = temp;
    }

    return a;
}

const gcdLtoR = new Array(N);
const gcdRtoL = new Array(N);

gcdLtoR[0] = arr[0];
gcdRtoL[N - 1] = arr[N - 1];

for (let i = 1; i < N; i++) {
    gcdLtoR[i] = gcd(gcdLtoR[i - 1], arr[i]);
    gcdRtoL[N - 1 - i] = gcd(gcdRtoL[N - i], arr[N - 1 - i]);
}

let maxGcd = -1;
let excluded = -1;

for (let i = 0; i < N; i++) {
    let temp = 0;

    if (i === 0) {
        temp = gcdRtoL[1];
    } else if (i === N - 1) {
        temp = gcdLtoR[N - 2];
    } else {
        temp = gcd(gcdLtoR[i - 1], gcdRtoL[i + 1]);
    }

    if (arr[i] % temp !== 0) {
        if (temp > maxGcd) {
            maxGcd = temp;
            excluded = arr[i];
        }

    }
}

console.log(maxGcd === -1 ? maxGcd : maxGcd + " " + excluded);