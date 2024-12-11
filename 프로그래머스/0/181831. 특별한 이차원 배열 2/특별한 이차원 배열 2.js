function solution(arr) {
    let answer = 1;
    const len = arr.length;
    outer: for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(arr[i][j] !== arr[j][i]) {
                answer = 0;
                break outer;
            }
        }
    }
    return answer;
}