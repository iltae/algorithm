function solution(numbers, n) {
    let answer = numbers.reduce((acc, cur) => acc > n ? acc : acc + cur, 0)
    return answer;
}