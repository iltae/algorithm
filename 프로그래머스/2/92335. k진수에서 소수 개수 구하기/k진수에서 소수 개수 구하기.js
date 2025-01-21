function solution(n, k) {
    return n.toString(k).split(/0+/).filter(el => isPrime(el)).length;
}

function isPrime(num) {
    if(num <= 1) return false;
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    
    return true;
}