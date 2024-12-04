function solution(strArr) {
    return strArr.map((el, idx) => idx % 2 === 0 ? el.toLowerCase() : el.toUpperCase())
}