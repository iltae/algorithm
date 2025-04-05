function gcb(a, b) {
    while(b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}

function solution(a, b) {
    const temp = gcb(a, b);
    b /= temp;
    while(b > 1) {
        if(b % 5 === 0 || b % 2 === 0) {
            if(b % 5 === 0) b /= 5;
            if(b % 2 === 0) b /= 2;
        } else {
            return 2;
        }
    }
    
    return 1;
}