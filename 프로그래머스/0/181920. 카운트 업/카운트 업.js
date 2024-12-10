function solution(start_num, end_num) {
    const answer = [];
    while(start_num <= end_num) {
        answer.push(start_num);
        start_num++;
    }
    return answer;
}