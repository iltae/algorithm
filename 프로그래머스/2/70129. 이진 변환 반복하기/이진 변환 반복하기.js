function solution(s) {
    const answer = [0, 0];
    
    while(s !== '1') {
        const temp1 = s.split("");
        const temp2 = temp1.filter(el => el !== '0');
        s = temp2.length.toString(2);
        answer[1] += temp1.length - temp2.length;
        answer[0] += 1;
    }
    
    return answer;
}