function solution(s) {
    let answer = [0, 0];
    while(s !== "1") {
        const sArr = s.split("");
        const temp = sArr.filter(el => el === "1");
        answer[1] += sArr.length - temp.length;
        answer[0]++;
        s = temp.length.toString(2);
    }
    return answer;
}