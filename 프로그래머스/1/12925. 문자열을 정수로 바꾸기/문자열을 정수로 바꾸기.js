function solution(s) {
    return s[0] !== "-" ? +s : -+s.slice(1);
}