function solution(elements) {
    const answer = new Set();
    const n = elements.length;

    for (let len = 1; len <= n; len++) {
        for (let i = 0; i < n; i++) {
            let sum = 0;
            
            for (let j = i; j < i + len; j++) {
                sum += elements[j % n];
            }
            
            answer.add(sum);
        }
    }

    return answer.size;
}
