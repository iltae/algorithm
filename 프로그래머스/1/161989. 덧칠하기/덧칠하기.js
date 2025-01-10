function solution(n, m, section) {
    let answer = 0, lastPainted = 0;

    for (let i = 0; i < section.length; i++) {
        if (section[i] > lastPainted) {
            answer++;
            lastPainted = section[i] + m - 1;
        }
    }

    return answer;
}
