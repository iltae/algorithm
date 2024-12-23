function solution(arr, k) {
    let answer = Array(k).fill(-1), i = 0;
    
    for(let el of arr) {
        
        if(i === k) {
            break;
        }
        
        if(!answer.includes(el)) {
            answer[i] = el;
            i++;
        }
    }
    return answer;
}