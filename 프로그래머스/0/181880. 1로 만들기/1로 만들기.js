function solution(num_list) {
    var answer = 0;
    num_list.forEach(el => {
        while(el !== 1) {
            answer++;
            if(el % 2 === 1) {
                el = (el - 1) / 2;
            } else {
                el /= 2;
            }
        }
    })
    return answer;
}