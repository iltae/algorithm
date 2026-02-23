const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const str = input[0];
const N = str.length <= 9 ? str.length : (str.length - 9) / 2 + 9;
const visited = Array(N + 1).fill(false);
let flag = false;

function dfs(idx, arr) {

    if (flag) return;

    if (idx >= str.length) {
        if (arr.length === N) {
            flag = true;
            console.log(arr.join(" "));
        }
        return;
    }

    const nextOne = Number(str.slice(idx, idx + 1));
    const nextTwo = Number(str.slice(idx, idx + 2));

    if (nextOne !== 0 && !visited[nextOne]) {
        visited[nextOne] = true;
        dfs(idx + 1, [...arr, nextOne]);
        visited[nextOne] = false;
    }

    if (nextTwo <= 50 && !visited[nextTwo]) {
        visited[nextTwo] = true;
        dfs(idx + 2, [...arr, nextTwo]);
        visited[nextTwo] = false;
    }
}

dfs(0, []);