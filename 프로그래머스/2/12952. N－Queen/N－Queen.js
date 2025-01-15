function solution(n) {
    let answer = 0;
    const hasQueen = Array.from({ length: n }, () => Array(n).fill(false));

    function backtrack(row) {
        if (row === n) {
            answer++;
            return;
        }

        for (let col = 0; col < n; col++) {
            let canPlace = true;

            for (let prevRow = row - 1; prevRow >= 0; prevRow--) {
                if(hasQueen[prevRow][col]
                   || (col - (row - prevRow) >= 0 && hasQueen[prevRow][col - (row - prevRow)])
                   || (col + (row - prevRow) < n && hasQueen[prevRow][col + (row - prevRow)])) {
                    canPlace = false;
                    break;
                }
            }

            if (canPlace) {
                hasQueen[row][col] = true;
                backtrack(row + 1);
                hasQueen[row][col] = false;
            }
        }
    }

    backtrack(0);
    
    return answer;
}
