function solution(lines) {
    const lineTracker = Array(201).fill(0);
    
    for (let i = 0; i < 3; i++) {
        const start = lines[i][0] + 100;
        const end = lines[i][1] + 100;
        for (let j = start; j < end; j++) {
            lineTracker[j] += 1;
        }
    }

    let answer = 0;
    
    for (let i = 0; i < 201; i++) {
        if (lineTracker[i] >= 2) {
            answer += 1;
        }
    }

    return answer;
}
