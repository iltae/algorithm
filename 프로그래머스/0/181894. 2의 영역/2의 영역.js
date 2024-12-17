function solution(arr) {
    const two = arr.filter(el => el === 2).length;
    return two >= 2 ? arr.slice(arr.indexOf(2), arr.lastIndexOf(2)+1) : two === 1 ? [2] : [-1];
}