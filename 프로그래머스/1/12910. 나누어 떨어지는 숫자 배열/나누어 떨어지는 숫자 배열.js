function solution(arr, divisor) {
    const answer = arr.filter(el => el % divisor === 0);
    return answer.length? answer.sort((a, b) => a - b): [-1];
}