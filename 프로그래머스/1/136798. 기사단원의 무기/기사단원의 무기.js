function solution(number, limit, power) {
    let answer = Array.from({length : number}, (_, idx) => {
        let num = idx + 1, count = 0;
        
        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                count++;
                if (i !== num / i) {
                    count++;
                }
            }
        }
        
        if (count > limit) {
            return power;
        }
        return count;
    });
    
    return answer.reduce((acc, cur) => acc + cur, 0);
}
