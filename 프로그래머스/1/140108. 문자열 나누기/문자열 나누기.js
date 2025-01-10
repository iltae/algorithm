function solution(s) {
    let answer = 0, remain = s;
    while(remain.length > 0) {
        const x = remain[0];
        let idx = 1, same = 1, diff = 0;
        while(idx <= remain.length) {
            if(same === diff) {
                break;
            }
            
            if(remain[idx] === x) {
                same++;
            } else {
                diff++;
            }
            
            idx++;
        }

        answer++;
        remain = remain.slice(idx);
    }

    return answer;
}
