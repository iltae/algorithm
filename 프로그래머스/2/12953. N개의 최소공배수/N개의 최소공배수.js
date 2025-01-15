function solution(arr) {
    arr.sort((a, b) => b - a);
    let answer = arr[0];
    while(!arr.every(el => answer % el === 0)) {
        answer++;
    }
    return answer;
}