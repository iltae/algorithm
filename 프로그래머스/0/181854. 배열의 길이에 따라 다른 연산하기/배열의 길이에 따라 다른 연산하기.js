function solution(arr, n) {
    const len = arr.length;
    return len % 2 === 1 ? arr.map((el, idx) => idx % 2 === 0 ? el + n : el) : arr.map((el, idx) => idx % 2 === 1 ? el + n : el);
}