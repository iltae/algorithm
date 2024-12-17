function solution(myStr) { 
    const answer = myStr.split("").map(el => el === 'a' || el === 'b' | el === 'c' ? 1 : el).join("").split(1).filter(el => el);
    
    return answer.length > 0 ? answer: ["EMPTY"];

}