function solution(arr) {
    var answer = 0;
    let prev = [...arr];
    let curr = arr.map((el) => {
        if(el >= 50 && el % 2 === 0) {
            return el /= 2;
        }
        if(el < 50 && el % 2 === 1) {
            return el * 2 + 1;
        }
    })
    while(prev.join("") !== curr.join("")) {
        prev = curr;
        curr = curr.map((el) => {
        if(el >= 50 && el % 2 === 0) {
            return el /= 2;
        }
        if(el < 50 && el % 2 === 1) {
            return el * 2 + 1;
        }
        })
        answer++;
    }
    return answer - 1;
}