function solution(progresses, speeds) {
    const answer = [];
    
    const days = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));
    
    let idx = 0;
    
    while(idx < days.length) {
        const currDay = days[idx++];
        let count = 1;
        
        while (currDay >= days[idx]) {
            idx++;
            count++;
        }
        
        answer.push(count);
    }
    
    return answer;
}