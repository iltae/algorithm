const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const [R, G] = input[0].split(" ").map(Number);

function getGCD(a, b) {
    while (b !== 0) {
        a %= b;
        [a, b] = [b, a];
    }

    return a;
}

const gcd = getGCD(R, G);
const results = [];

for (let i = 1; i * i <= gcd; i++) {
    if (gcd % i === 0) {
        results.push(i);
        if (i * i !== gcd) {
            results.push(gcd / i);
        }
    }
}

let output = "";

for (const n of results) {
    output += `${n} ${R / n} ${G / n}\n`;
}

console.log(output);
