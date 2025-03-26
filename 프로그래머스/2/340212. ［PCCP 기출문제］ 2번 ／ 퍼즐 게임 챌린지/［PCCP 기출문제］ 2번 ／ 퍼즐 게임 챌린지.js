function solution(diffs, times, limit) {
    function calcTime(level) {
        let answer = times[0];
    
        for(let i = 1; i < diffs.length; i++) {
            if(diffs[i] <= level) {
                answer += times[i];
            } else {
                answer += (diffs[i] - level) * (times[i] + times[i - 1]) + times[i];
            }
        }
    
        return answer;
    }
    
    let start = 1, end = 0;
    
    diffs.forEach(diff => {
        if(diff > end) end = diff
    })
    
    let answer = end;
    
    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        const result = calcTime(mid);
        
        if(result <= limit) {
            answer = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return answer;
}
