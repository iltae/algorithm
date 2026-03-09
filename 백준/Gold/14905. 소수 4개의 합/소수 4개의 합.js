const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

let lineIdx = 0;

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

while (true) {
    if (input[lineIdx] === undefined) break;

    const N = Number(input[lineIdx++]);

    if (N < 8) {
        console.log('Impossible.');
        continue;
    }

    const answer = [];
    let remain = N;

    if (N % 2 === 0) {
        answer.push(2, 2);
        remain -= 4;
    } else {
        answer.push(2, 3);
        remain -= 5;
    }

    for (let i = 2; i <= remain / 2; i++) {
        if (isPrime(i) && isPrime(remain - i)) {
            answer.push(i, remain - i);
            break;
        }
    }

    console.log(answer.join(' '));
}