const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);

const parent = Array.from({ length: N + 1 }, (_, idx) => idx);

// 1. 찾기
function find(x) {
    if (parent[x] === x) return x;
    return parent[x] = find(parent[x]);
}

// 2. 합치기
function union(a, b) {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA !== rootB) {
        parent[rootA] = rootB;
    }
}

for (let i = 1; i <= M; i++) {
    const [command, A, B] = input[i].split(" ").map(Number);

    if (command === 0) {
        union(A, B);
    } else {
        if (find(A) === find(B)) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
}