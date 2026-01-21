const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const S = input[0];
const T = input[1].split("");

while (T.length > S.length) {
    const lastWord = T.pop();

    if (lastWord === 'B') {
        T.reverse();
    }
}

console.log(T.join("") === S ? 1 : 0);