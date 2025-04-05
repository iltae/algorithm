function solution(numlist, n) {
    numlist.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || b - a);
    return numlist;
}