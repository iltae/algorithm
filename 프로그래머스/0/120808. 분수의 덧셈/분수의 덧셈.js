function gcb(a, b) {
    while (b) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


function solution(numer1, denom1, numer2, denom2) {
    const num1 = numer1 * denom2 + numer2 * denom1;
    const num2 = denom1 * denom2;
    const temp = gcb(num1, num2);
    return [num1 / temp, num2 / temp];
}