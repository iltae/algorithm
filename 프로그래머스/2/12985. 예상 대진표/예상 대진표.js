function solution(n, a, b) {
    let answer = 1, teamA = Math.ceil(a / 2), teamB = Math.ceil(b / 2);

    console.log(teamA, teamB)
    
    while(teamA !== teamB) {
        teamA = Math.ceil(teamA / 2);
        teamB = Math.ceil(teamB / 2);
        answer++;
    }

    return answer;
}