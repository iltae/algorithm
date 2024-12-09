function solution(todo_list, finished) {
    const answer = [];
    finished.forEach((el, idx) => {
        if(!el) {
            answer.push(todo_list[idx])
        }
    })
    return answer;
}