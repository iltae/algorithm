function solution(score) {
    const avg = score.map(([english, math]) => (english + math) / 2);
    const temp = [...avg];
    temp.sort((a, b) => b - a);
    return avg.map(el => temp.indexOf(el) + 1);
}