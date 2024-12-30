function solution(left, right) {
    const numbers = Array.from({length : right - left + 1}, (_, idx) => {
        return [left + idx, 0];
    });
    numbers.forEach(([num, cnt], idx) => {
        let divisor = 1;
        while(divisor <= num) {
            if(num % divisor === 0) {
                cnt += 1;
            }
            divisor++;
        }
        numbers[idx][1] = cnt;
    })
    return numbers.reduce((acc, [num, cnt]) => cnt % 2 === 0 ? acc + num : acc - num, 0);
}