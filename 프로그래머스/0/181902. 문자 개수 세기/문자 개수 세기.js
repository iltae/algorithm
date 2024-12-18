function solution(my_string) {
    let answer = Array(52).fill(0);
    my_string.split("").forEach((el) => {
        if(el.charCodeAt() < 97) {
            answer[el.charCodeAt() - 65] += 1;  
        } else {
            answer[el.charCodeAt() - 71] += 1;
        }
    })
    return answer;
}