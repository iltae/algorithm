class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();
        if (this.size() === 0) return null;

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    bubbleUp() {
        let index = this.size() - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;

            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.size();

        while (true) {
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;
            let swapIndex = null;

            if (leftChildIndex < length) {
                if (this.heap[leftChildIndex][0] < this.heap[index][0]) {
                    swapIndex = leftChildIndex;
                }

            }

            if (rightChildIndex < length) {
                if (
                    (swapIndex === null && this.heap[rightChildIndex][0] < this.heap[index][0]) ||
                    (swapIndex !== null && this.heap[rightChildIndex][0] < this.heap[swapIndex][0])) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) break;

            [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[index]];
            index = swapIndex;
        }
    }
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const N = Number(input[0]);
const M = Number(input[1]);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 2; i <= M + 1; i++) {
    const [u, v, w] = input[i].split(" ").map(Number);
    graph[u].push([w, v]);
}

const [start, end] = input[M + 2].split(" ").map(Number);

const dist = Array(N + 1).fill(Infinity);
const route = Array(N + 1).fill(0);

const pq = new MinHeap();
dist[start] = 0;
pq.push([0, start]);

while (pq.size()) {
    const [cost, node] = pq.pop();

    if (dist[node] < cost) continue;

    for (const next of graph[node]) {
        const nextCost = cost + next[0];

        if (nextCost < dist[next[1]]) {
            dist[next[1]] = nextCost;
            route[next[1]] = node;
            pq.push([nextCost, next[1]]);
        }
    }
}

const path = [];
let temp = end;
while (temp !== 0) {
    path.push(temp);
    if (temp === start) break;
    temp = route[temp];
}

console.log(dist[end]);
console.log(path.length);
console.log(path.reverse().join(' '));