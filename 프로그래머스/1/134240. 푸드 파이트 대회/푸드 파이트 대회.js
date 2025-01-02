function solution(food) {
    let answer = '';
    for(let i = 1; i < food.length; i++) {
        const temp = String(i).repeat(Math.floor(food[i] / 2));
        if (temp) {
            answer += temp;
        }
    }
    return answer + "0" + answer.split("").reverse().join("");
}