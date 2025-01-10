function solution(lottos, win_nums) {
    const numbers = lottos.filter(el => el !== 0);
    const check = numbers.length;
    const match = numbers.reduce((acc, cur) => win_nums.includes(cur) ? acc += 1 : acc, 0);
    
    let max = 1 + check - match, min = 7 - match;
    
    if(max > 6) {
        max = 6
    }
    
    if(min > 6) {
        min = 6;
    }
    
    return [max, min];
}