function solution(brown, yellow) {
    for (let y = 1; y * y <= yellow; y++) {
        if (yellow % y === 0) {
            let x = yellow / y;

            if (2 * x + 2 * y + 4 === brown) {
                return [x + 2, y + 2];
            }
        }
    }
}