function solution(citations) {
    citations.sort((a, b) => b - a);

    let hIndex = 0;
    
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i + 1) break;
        hIndex = i + 1;
    }

    return hIndex;
}