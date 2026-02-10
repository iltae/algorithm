const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const commands = ["D", "S", "L", "R"];
const N = Number(input[0]);

function calculate(command, register) {
    switch (command) {
        case 'D': return register * 2 % 10000;
        case 'S': return register !== 0 ? register - 1 : 9999;
        case 'L': return register % 1000 * 10 + Math.floor(register / 1000);
        case 'R': return register % 10 * 1000 + Math.floor(register / 10);
    }
}

for (let i = 1; i <= N; i++) {
    const [A, B] = input[i].split(" ").map(Number);
    const visited = Array(10000).fill(false);
    const from = Array(10000).fill(null);

    const queue = [A];
    visited[A] = true;
    let head = 0;
    let result = "";

    while (head < queue.length) {
        const curRegister = queue[head++];

        if (curRegister === B) {
            let curr = B;
            while (curr !== A) {
                const [prev, cmd] = from[curr];
                result += cmd;
                curr = prev;
            }
            console.log(result.split("").reverse().join(""));
            break;
        }

        for (const command of commands) {
            const next = calculate(command, curRegister);

            if (!visited[next]) {
                queue.push(next);
                visited[next] = true;
                from[next] = [curRegister, command];
            }
        }
    }
}