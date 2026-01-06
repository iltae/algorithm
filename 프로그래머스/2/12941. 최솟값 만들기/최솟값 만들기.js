function solution(A, B){
    const L = A.length;

    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    let sum = 0;
    
    for (let i = 0; i < L; i++) {
        sum += A[i] * B[i];
    }
    
    return sum;
}