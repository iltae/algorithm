function solution(board) {
    const copy = [...board], n = board.length;
    let count = 0;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(copy[i][j] === 1) {
                for(let row = i - 1; row <= i + 1; row++) {
                    for(let col = j - 1; col <= j + 1; col++) {
                        if(row >= 0 && row < n && col >= 0 && col < n && copy[row][col] === 0) {
                            copy[row][col] = 2;
                        }
                    }
                }
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(copy[i][j] === 0) count++;
        }
    }
    
    return count;
}