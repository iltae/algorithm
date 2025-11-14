function solution(k, tangerine) {
    const sizeCounts = new Map();
    let answer = 0;
    
    for (const size of tangerine) {
        sizeCounts.set(size, (sizeCounts.get(size) || 0) + 1);
    }

    const counts = Array.from(sizeCounts.values());
    counts.sort((a, b) => b - a);
    
    let totalPicked = 0;
    
    for (const count of counts) {
        totalPicked += count;
        answer++;
        
        if (totalPicked >= k) {
            break; 
        }
    }
    
    return answer;
}