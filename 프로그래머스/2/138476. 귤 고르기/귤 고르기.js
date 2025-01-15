function solution(k, tangerine) {
    const max = Math.max(...tangerine), answer = Array(max).fill(0);
    let result = 0;
    tangerine.forEach(el => {
        answer[el - 1]++;
    })
    answer.sort((a, b) => b - a);
    for(let i = 0; i < answer.length; i++) {
        result += answer[i];
        if(result >= k) {
            return i + 1;
        }
    }
    return 0;
}