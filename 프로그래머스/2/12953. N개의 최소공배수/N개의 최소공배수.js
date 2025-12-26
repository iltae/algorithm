function solution(arr) {
    const gcd = (a, b) => {
        while (b !== 0) {
            let r = a % b;
            a = b;
            b = r;
        }
        return a;
    };

    const lcm = (a, b) => (a * b) / gcd(a, b);

    return arr.reduce((acc, cur) => lcm(acc, cur));
}