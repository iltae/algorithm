function solution(arr) {
    let goal = 1;
    while(goal < arr.length) {
        goal *= 2;
    }
    while(arr.length < goal) {
        arr.push(0)
    }
    return arr;
}