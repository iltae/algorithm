function solution(a, b, c, d) {
    
    const dice = new Set([a, b, c, d]), arr = [a, b, c, d];
    let answer = 0;
    
    if (dice.size === 4) {
        answer = Math.min(Math.min(a, b), Math.min(c, d));
    } else if (dice.size === 3) {
        answer = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el)).reduce((acc, cur) => acc * cur, 1);
    } else if (dice.size === 2) {
        const len = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el)).length;
        const temp = [...dice];
        if (len) {
            const q = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))[0];
            const p = arr.filter(el => el !== q)[0];
            answer = (10 * p + q) ** 2;
        } else {
            answer = (temp[0] + temp[1]) * Math.abs(temp[0] - temp[1]);
        }
    } else {
        answer = 1111 * a;
    }
    return answer;
}
