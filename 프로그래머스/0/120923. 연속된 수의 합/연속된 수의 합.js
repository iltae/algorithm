function solution(num, total) {
    const start = (total - (num * (num - 1)) / 2) / num;
    return Array.from({ length : num }, (_, idx) => start + idx);
}
