function solution(cards1, cards2, goal) {
    let i = 0, j = 0;
    for (let word of goal) {
        if (i < cards1.length && word === cards1[i]) {
            i++;
        } else if (j < cards2.length && word === cards2[j]) {
            j++;
        } else {
            return "No";
        }
    }
    
    return "Yes";
}
