function solution(id_list, report, k) {
    const modReport = new Set(report);
    const answer = {};
    const result = Array(id_list.length).fill(0);
    [...modReport].forEach((el, idx) => {
        const [user1, user2] = el.split(" ");
        
        if(answer[user2]) {
            answer[user2].push(user1);
        } else {
            answer[user2] = [user1];
        }
    })
    
    for(let el in answer) {
        if(answer[el].length >= k) {
            answer[el].forEach(user => {
                result[id_list.indexOf(user)]++;
            })
        }
    }
    
    return result;
}