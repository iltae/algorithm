function solution(my_string) {
    const answer = [];
    while(my_string.length > 0) {
        answer.push(my_string);
        my_string = my_string.slice(1);
    }
    return answer.sort();
}