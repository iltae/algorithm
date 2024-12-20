function solution(arr, queries) {
    let answer = [];
    queries.forEach(([s, e, k]) => {
        const tempArr = arr.slice(s, e + 1).sort((a, b) => a - b);
        let result = -1;
        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i] > k) {
                result = tempArr[i];
                break;
            }
        }
        answer.push(result);
    })
    return answer;
}