function solution(arr) {
    const answer = [arr[0]];
    let prev = arr[0];
    for(let el of arr) {
        if(el !== prev) {
            answer.push(el);
            prev = el;
        }
    }
    return answer;
}