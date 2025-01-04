function solution(spell, dic) {
    let answer = 2;
    dic.forEach(word => {
        let temp = 0;
        spell.forEach(keyword => {
            if(word.indexOf(keyword) !== -1 && word.indexOf(keyword) === word.lastIndexOf(keyword)) {
                temp += 1;
            }
        })
        if(temp == spell.length) {
            answer = 1;
        }
    })
    return answer;
}