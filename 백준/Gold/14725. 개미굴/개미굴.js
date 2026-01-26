const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = Number(input[0]);
const trie = {};

for (let i = 1; i <= N; i++) {
    const [cnt, ...foods] = input[i].split(" ");
    let currentNode = trie;

    for (const food of foods) {
        currentNode[food] = currentNode[food] || {};
        currentNode = currentNode[food];
    }
}

function display(node, depth) {
    const children = Object.keys(node).sort();

    for (const child of children) {
        console.log("--".repeat(depth) + child);
        display(node[child], depth + 1);
    }
}

display(trie, 0);