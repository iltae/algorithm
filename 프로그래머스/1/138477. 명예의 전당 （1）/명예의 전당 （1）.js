function solution(k, score) {
    const hallOfFame = [], scores = [];
    score.forEach((el, idx) => {
        if (idx < k) {
            hallOfFame.push(el);
            hallOfFame.sort((a, b) => b - a);
        } else {
            if (el > hallOfFame[hallOfFame.length - 1]) {
                hallOfFame.push(el);
                hallOfFame.sort((a, b) => b - a);
                hallOfFame.pop();
            }
        }
        scores.push(hallOfFame[hallOfFame.length - 1]);
    });

    return scores;
}
