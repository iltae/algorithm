function solution(s) {
    const answer = [], arr = s.slice(2, -2).split("},{").sort((a, b) => a.length - b.length);
    
    arr.forEach(el => {
        const temp = el.split(",").map(Number);
        answer.push(temp.filter(el => !answer.includes(el))[0]);
    })
    
    return answer;
}