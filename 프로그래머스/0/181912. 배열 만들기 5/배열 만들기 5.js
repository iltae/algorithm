function solution(intStrs, k, s, l) {
    return intStrs.map((el) => +el.slice(s, s + l)).filter((el) => el > k);
}