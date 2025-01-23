function solution(n, t, m, p) {
    let total = t * m, count = 0;
    const answer = [];
    
    while(answer.length <= total) {
        const temp = count.toString(n);
        answer.push(...temp.split(""));
        count++;
    }
    
    return answer.filter((el, idx) => idx % m === p - 1).slice(0, t).join("").toUpperCase();
}