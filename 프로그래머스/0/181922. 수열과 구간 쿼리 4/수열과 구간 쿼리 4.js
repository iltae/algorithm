function solution(arr, queries) {
    let answer = [...arr];
    queries.forEach(([s, e, k]) => {
       answer = answer.map((el, idx) => idx >= s && idx <= e && idx % k === 0 ? el + 1 : el);
    });
    return answer;
}