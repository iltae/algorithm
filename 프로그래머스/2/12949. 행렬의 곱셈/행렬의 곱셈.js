function solution(arr1, arr2) {
    const answer = [];
    
    const arr2T = arr2[0].map((_, colIdx) => arr2.map(row => row[colIdx]));
    
    arr1.forEach(row => {
        const resultRow = [];
        arr2T.forEach(col => {
            const sum = row.reduce((acc, cur, idx) => acc + cur * col[idx], 0);
            resultRow.push(sum);
        });
        answer.push(resultRow);
    });
    
    return answer;
}
