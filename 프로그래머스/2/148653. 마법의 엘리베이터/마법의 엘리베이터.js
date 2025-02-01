function solution(storey) {
    let answer = 0;

    while (storey > 0) {
        let digit = storey % 10;
        let next = Math.floor(storey / 10);

        if (digit > 5) {
            answer += (10 - digit);
            storey = next + 1;
        } else if (digit < 5) {
            answer += digit;
            storey = next;
        } else {
            if (next % 10 >= 5) {
                answer += (10 - digit);
                storey = next + 1;
            } else {
                answer += digit;
                storey = next;
            }
        }
    }

    return answer;
}
