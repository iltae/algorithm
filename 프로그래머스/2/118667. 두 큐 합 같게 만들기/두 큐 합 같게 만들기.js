function solution(queue1, queue2) {
    let answer = 0;
    
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
    const totalSum = sum1 + sum2;

    if (totalSum % 2 !== 0) {
        return -1;
    }

    const target = totalSum / 2;

    let i = 0, j = 0;
    const maxOperations = queue1.length * 3;

    while (answer <= maxOperations) {
        if (sum1 === sum2) {
            return answer;
        }

        if (sum1 > sum2) {
            sum1 -= queue1[i];
            queue2.push(queue1[i]);
            sum2 += queue1[i];
            i++;
        } 
        else {
            sum2 -= queue2[j];
            queue1.push(queue2[j]);
            sum1 += queue2[j];
            j++;
        }

        answer++;
    }

    return -1;
}
