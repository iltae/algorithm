function solution(a, b, n) {
    let empty = n, answer = 0;
    
    while (empty >= a) {
        const colas = Math.floor(empty / a) * b;
        answer += colas;
        empty = empty % a + colas;
    }
    
    return answer;
}