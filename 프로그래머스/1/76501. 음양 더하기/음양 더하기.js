function solution(absolutes, signs) {
    return absolutes.map((el, idx) => signs[idx] ? el : -el).reduce((acc, cur) => acc + cur, 0);
}