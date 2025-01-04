function solution(balls, share) {
    let count = Math.min(share, balls - share);
    let result = 1;
    
    for (let i = 0; i < count; i++) {
        result *= balls - i;
        result /= i + 1;
    }
    
    return result;
}
