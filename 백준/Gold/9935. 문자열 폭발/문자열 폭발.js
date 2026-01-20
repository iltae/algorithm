const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const str = input[0];
const explosion = input[1];
const exLen = explosion.length;

const stack = [];

for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);

    if (stack.length >= exLen && stack[stack.length - 1] === explosion[exLen - 1]) {
        let match = true;

        for (let j = 1; j < exLen; j++) {
            if (stack[stack.length - 1 - j] !== explosion[exLen - 1 - j]) {
                match = false;
                break;
            }
        }

        if (match) {
            for (let j = 0; j < exLen; j++) {
                stack.pop();
            }
        }
    }
}

if (stack.length) {
    console.log(stack.join(""));
} else {
    console.log("FRULA");
}