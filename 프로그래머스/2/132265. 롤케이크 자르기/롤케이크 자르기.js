function solution(topping) {
    let answer = 0;

    const left_count = new Array(10001).fill(0);
    const right_count = new Array(10001).fill(0);

    for (let i = 0; i < topping.length; i++) {
        right_count[topping[i]]++;
    }

    let left_types = 0;
    let right_types = right_count.filter(el => el > 0).length;

    for (let i = 0; i < topping.length - 1; i++) {
        
        if (left_count[topping[i]] === 0) left_types++;
        left_count[topping[i]]++;

        right_count[topping[i]]--;
        if (right_count[topping[i]] === 0) right_types--;

        if (left_types === right_types) {
            answer++;
        }
        
    }

    return answer;
}
