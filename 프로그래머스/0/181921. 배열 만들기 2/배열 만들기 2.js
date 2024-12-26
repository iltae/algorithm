function solution(l, r) {
    let answer = [5], prev = ["5"], count = 1;
    while(count < String(r).length) {
        let temp = [];
        prev.forEach(el => {
            temp.push(el + "0");
            temp.push(el + "5");
        })
        prev = temp;
        answer = [...answer, ...prev.map(el => +el)];
        count += 1;
    }
    answer = answer.filter(el => el >= l && el <= r);
    return answer.length ? answer : [-1];
}