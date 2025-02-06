function solution(n) {
    let answer = '';
    
    while (n > 0) {
        let remainder = n % 3;
        
        if (remainder === 0) {
            answer += '4';
            n = n / 3 - 1;
        } else if (remainder === 1) {
            answer += '1';
            n = Math.floor(n / 3);
        } else {
            answer += '2';
            n = Math.floor(n / 3);
        }
    }
    
    return answer.split("").reverse().join("");
}
