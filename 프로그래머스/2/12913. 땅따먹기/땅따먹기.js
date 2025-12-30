function solution(land) {
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            const prevRow = land[i - 1];
            const maxPrev = Math.max(...prevRow.filter((_, index) => index !== j));
            land[i][j] += maxPrev;
        }
    }

    return Math.max(...land[land.length - 1]);
}