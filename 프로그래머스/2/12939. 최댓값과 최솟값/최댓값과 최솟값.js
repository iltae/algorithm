function solution(s) {
    const answer =  s.split(" ").sort((a, b) => a - b);
    return answer[0] + " " + answer[answer.length - 1];
}