function solution(survey, choices) {
    var answer = '';
    const personality = [{R: 0, T: 0}, {C: 0, F: 0}, {J: 0, M: 0}, {A: 0, N : 0}];
    survey.forEach((el, idx) => {
        personality.forEach(com => {
            if(el[0] in com) {
                if(choices[idx] < 4) {
                    com[el[0]] += 4 - choices[idx];
                } else {
                    com[el[1]] += choices[idx] - 4;
                }
            }
        }) 
    })
    personality.forEach(el => {
        const key = Object.keys(el).sort().sort((a, b) => el[b] - el[a])[0];
        answer += key;
    })
    return answer;
}