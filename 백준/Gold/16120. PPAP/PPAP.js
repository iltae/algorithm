const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const str = input[0];
const stack = [];

let idx = 0;

while (idx < str.length) {
    if (str[idx] === 'A' && stack.length >= 2 && stack[stack.length - 1] === 'P' && stack[stack.length - 2] === 'P' && str[idx + 1] === 'P') {
        stack.pop();
        stack.pop();
    } else {
        stack.push(str[idx]);
    }
    idx++;
}

if (stack.length === 1 && stack[0] === 'P') {
    console.log('PPAP')
} else {
    console.log('NP');
}