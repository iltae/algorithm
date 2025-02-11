function solution(data, col, row_begin, row_end) {

    data.sort((a, b) => {
        if (a[col - 1] === b[col - 1]) {
            return b[0] - a[0];
        } else {
            return a[col - 1] - b[col - 1];
        }
    });

    let result = 0;
    
    for (let i = row_begin - 1; i < row_end; i++) {
        let S_i = 0;
        for (let j = 0; j < data[i].length; j++) {
            S_i += data[i][j] % (i + 1);
        }
        result ^= S_i;
    }

    return result;
}
