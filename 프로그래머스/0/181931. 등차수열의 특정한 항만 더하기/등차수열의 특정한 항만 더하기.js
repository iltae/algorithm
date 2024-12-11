function solution(a, d, included) {
    return Array(included.length).fill(a).map((el, idx) => el + idx * d).reduce((acc, cur, idx) => included[idx]? acc + cur : acc, 0);
}