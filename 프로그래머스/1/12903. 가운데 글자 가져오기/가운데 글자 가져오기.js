function solution(s) {
    let len = s.length;
    return len % 2 === 1 ? s[(len - 1) / 2] : s.substr(len / 2 - 1, 2);
}