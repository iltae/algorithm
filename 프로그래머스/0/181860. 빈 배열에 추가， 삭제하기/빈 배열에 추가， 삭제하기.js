function solution(arr, flag) {
    let answer = [];
    flag.forEach((el, idx) => {
        if(el) {
            answer = [...answer, ...Array(arr[idx] * 2).fill(arr[idx])]
        } else {
            answer = answer.slice(0, answer.length - arr[idx])
        }
    })
    return answer;
}