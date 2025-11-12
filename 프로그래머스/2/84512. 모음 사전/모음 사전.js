function solution(word) {
    const weights = [781, 156, 31, 6, 1]
    const vowels = ["A", "E", "I", "O", "U"];
    return word.split("").reduce((acc, cur, idx) => acc + weights[idx] * vowels.indexOf(cur) + 1, 0);
}