function solution(n) {
    let jump = 0;
    while (n > 0) {
        if (n % 2 !== 0) {
            jump++;
        }
        n = Math.floor(n / 2);
    }
    return jump;
}
