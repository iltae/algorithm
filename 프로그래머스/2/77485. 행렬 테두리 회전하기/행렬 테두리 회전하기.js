function solution(rows, columns, queries) {

    const matrix = Array.from({ length: rows }, (_, i) =>
        Array.from({ length: columns }, (_, j) => i * columns + j + 1)
    );

    const answer = [];

    function rotate(x1, y1, x2, y2) {
        x1--; y1--; x2--; y2--;

        const temp = [];
        
        for (let i = y1; i < y2; i++) temp.push(matrix[x1][i]);
        for (let i = x1; i < x2; i++) temp.push(matrix[i][y2]);
        for (let i = y2; i > y1; i--) temp.push(matrix[x2][i]);
        for (let i = x2; i > x1; i--) temp.push(matrix[i][y1]);

        const rotated = [...temp];
        rotated.unshift(rotated.pop());
        
        let idx = 0;

        for (let i = y1; i < y2; i++) matrix[x1][i] = rotated[idx++];
        for (let i = x1; i < x2; i++) matrix[i][y2] = rotated[idx++];
        for (let i = y2; i > y1; i--) matrix[x2][i] = rotated[idx++];
        for (let i = x2; i > x1; i--) matrix[i][y1] = rotated[idx++];

        return Math.min(...temp);
    }

    for (const [x1, y1, x2, y2] of queries) {
        answer.push(rotate(x1, y1, x2, y2));
    }

    return answer;
}
