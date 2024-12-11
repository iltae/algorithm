function solution(n) {
    let answer = 0;
    if(n % 2 == 1) {
        while(n >= 1) {
            answer += n;
            n -= 2;
        }
    } else {
        while(n >= 2) {
            answer += Math.pow(n, 2);
            n -= 2;
        }
    }
    return answer;
}