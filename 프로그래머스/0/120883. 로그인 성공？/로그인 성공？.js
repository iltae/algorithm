function solution(id_pw, db) {
    let answer = 'fail';
    db.forEach(([id, pw]) => {
        if(id === id_pw[0]) {
            answer = "wrong pw";
            if(pw === id_pw[1]) {
                answer = "login";
            }
        }
    })
    return answer;
}