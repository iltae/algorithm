function solution(elements) {
    const n = elements.length;
    const doubledElements = [...elements, ...elements];
    const uniqueSums = new Set();
    
    for (let i = 0; i < n; i++) {
        let currentSum = 0;
        
        for (let length = 1; length <= n; length++) {
            currentSum += doubledElements[i + length - 1];
            uniqueSums.add(currentSum);
        }
    }

    return uniqueSums.size;
}