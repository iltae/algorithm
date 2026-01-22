const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const T = Number(input[0]);

for (let t = 1; t <= T; t++) {
    const N = Number(input[t]);
    const results = []

    function dfs(num, expression) {
        if (num === N) {
            if (calculate(expression) === 0) {
                results.push(expression);
            }
            return;
        }

        const nextNum = num + 1;
        dfs(nextNum, expression + " " + nextNum);
        dfs(nextNum, expression + "+" + nextNum);
        dfs(nextNum, expression + "-" + nextNum);
    }

    dfs(1, "1");

    for (const result of results) {
        console.log(result);
    }
    console.log("")
}

function calculate(expression) {
    const str = expression.split(" ").join("");
    const arr = str.split("+").map((el => {
        if (el.indexOf("-") !== -1) {
            const tmp = el.split("-").map(Number);
            let cost = tmp[0];
            for (let i = 1; i < tmp.length; i++) {
                cost -= tmp[i];
            }
            return cost;
        } else {
            return Number(el);
        }
    }))
    return arr.reduce((acc, cur) => acc + cur, 0);
}
