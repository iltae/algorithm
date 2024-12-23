function solution(picture, k) {
    let answer = [];
    for(let el of picture.map((el) => el.split("").map(el => el.repeat(k)).join(""))) {
        for(let i = 1 ; i <= k; i++) {
            answer.push(el);
        }
    }
    return answer;
}