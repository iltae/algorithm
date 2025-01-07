function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        for (let j = i; sum < n; j++) {
            sum += j;
            if (sum === n) {
                answer += 1;
                break;
            }
        }
    }
    
    return answer;
}
