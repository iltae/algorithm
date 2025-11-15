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
            const parentElement = this.heap[parentIndex];
            
            if (parentElement[0] <= element[0]) break;
            
            this.heap[index] = parentElement;
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
        const element = this.heap[0];
        const length = this.heap.length;
        
        while (true) {
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                
                if (leftChild[0] < element[0]) {
                    swap = leftChildIndex;
                }
            }
            
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                
                if ((swap === null && rightChild[0] < element[0]) || (swap !== null && rightChild[0] < leftChild[0])) {
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

function solution(n, s, a, b, fares) {
    const graph = Array.from({ length : n + 1 }, () => []);
    
    fares.forEach(([v1, v2, count]) => {
        graph[v1].push([v2, count]);
        graph[v2].push([v1, count]);
    })
    
    const dijkstra = (startNode) => {
        const dist = Array(n + 1).fill(Infinity);
        const pq = new MinPriorityQueue();
        
        dist[startNode] = 0;
        pq.enqueue([0, startNode]);
        
        while (!pq.isEmpty()) {
            const [currentCost, currentNode] = pq.dequeue();
            
            if (currentCost > dist[currentNode]) continue;
            
            for (const [neighbor, cost] of graph[currentNode]) {
                const newCost = cost + currentCost;
                
                if (newCost < dist[neighbor]) {
                    dist[neighbor] = newCost;
                    pq.enqueue([newCost, neighbor]);
                }
            }
        }
        return dist;
    }
    
    const dijkstraFromS = dijkstra(s);
    const dijkstraFromA = dijkstra(a);
    const dijkstraFromB = dijkstra(b);
    
    let minCost = Infinity;
    
    for (let k = 1; k <= n; k++) {
        const cost  = dijkstraFromS[k] + dijkstraFromA[k] + dijkstraFromB[k];
        minCost = Math.min(minCost, cost);
    }
    
    return minCost;
}