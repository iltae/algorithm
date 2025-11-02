function solution(survey, choices) {
    const scores = {
        'R': 0, 'T': 0, 'C': 0, 'F': 0,
        'J': 0, 'M': 0, 'A': 0, 'N': 0
    };
    
    for (let i = 0; i < choices.length; i++) {
        const [char1, char2] = survey[i].split("");
        
        if (choices[i] < 4) {
            scores[char1] -= choices[i] - 4;
        } else if (choices[i] > 4) {
            scores[char2] += choices[i] - 4;
        }
    }
    
    const pairs = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    
    return pairs.map(([type1, type2]) => scores[type1] >= scores[type2] ? type1 : type2).join("");
}