class MinPriorityQueue {
    constructor() {
        this.heap = [];
    }
    isEmpty() {
        return this.heap.length === 0;
    }
    enqueue(element) {
        this.heap.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const element = this.heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (parent[0] <= element[0]) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }
    dequeue() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null; // ★ (undefined가 아닌 null로 초기화)

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild[0] < element[0]) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild[0] < element[0]) ||
                    (swap !== null && rightChild[0] < leftChild[0])
                ) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

function solution(n, paths, gates, summits) {
    const graph = Array.from({ length: n + 1 }, () => []);
    
    for (const [u, v, w] of paths) {
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    }

    const summitSet = new Set(summits);
    const gateSet = new Set(gates);
    const intensity = new Array(n + 1).fill(Infinity);

    const pq = new MinPriorityQueue();

    for (const gate of gates) {
        intensity[gate] = 0;
        pq.enqueue([0, gate]);
    }
    
    while (!pq.isEmpty()) {
        const [currentIntensity, currentNode] = pq.dequeue();

        if (currentIntensity > intensity[currentNode]) {
            continue;
        }

        // 현재 노드가 산봉우리이면 더 이상 나아가지 않음
        if (summitSet.has(currentNode)) {
            continue;
        }

        for (const [nextNode, cost] of graph[currentNode]) {
            
            // 다음 노드가 출입구이면 가지 않음
            if (gateSet.has(nextNode)) {
                continue;
            }

            // intensity 갱신
            const newIntensity = Math.max(currentIntensity, cost);

            if (newIntensity < intensity[nextNode]) {
                intensity[nextNode] = newIntensity;
                pq.enqueue([newIntensity, nextNode]);
            }
        }
    }
    
    // [산봉우리 번호, 최소 intensity]
    let answer = [Infinity, Infinity]; 
    
    // 산봉우리 번호 오름차순으로 정렬
    // intensity가 같을 경우, 번호가 낮은 산봉우리가 자동으로 선택됨
    summits.sort((a, b) => a - b);
    
    for (const summit of summits) {
        if (intensity[summit] < answer[1]) {
            answer = [summit, intensity[summit]];
        }
    }

    return answer;
}