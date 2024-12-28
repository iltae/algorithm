function solution(n) {
    let answer = 0, count = 1;
    while(count <= n) {
        if(n % count === 0) {
            answer += count;
        }
        count++;
    }
    return answer;
}