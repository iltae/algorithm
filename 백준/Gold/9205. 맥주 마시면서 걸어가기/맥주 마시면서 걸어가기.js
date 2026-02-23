const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const t = Number(input[0]);
let line = 1;

for (let T = 1; T <= t; T++) {
    const n = Number(input[line++]);
    const home = input[line++].split(" ").map(Number);
    const stores = [];

    for (let i = 1; i <= n; i++) {
        stores.push(input[line++].split(" ").map(Number));
    }

    const festival = input[line++].split(" ").map(Number);

    const queue = [home];
    let head = 0;
    const visited = new Array(n).fill(false);
    let arrived = false;

    while (head < queue.length) {
        const [r, c] = queue[head++];

        if (Math.abs(festival[0] - r) + Math.abs(festival[1] - c) <= 1000) {
            arrived = true;
            console.log('happy');
            break;
        }

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                const [nr, nc] = stores[i];
                const dist = Math.abs(r - nr) + Math.abs(c - nc);

                if (dist <= 1000) {
                    visited[i] = true;
                    queue.push([nr, nc]);
                }
            }
        }
    }

    if (!arrived) console.log('sad')
}