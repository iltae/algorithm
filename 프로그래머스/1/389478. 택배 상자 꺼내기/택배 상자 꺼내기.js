function solution(n, w, num) {
    const numRow = Math.ceil(num / w), totalRows = Math.ceil(n / w);

    const numRowArray = Array.from({ length: w }, (_, i) => (numRow - 1) * w + i + 1);

    const numCol = numRow % 2 === 1 ? numRowArray.indexOf(num) : numRowArray.reverse().indexOf(num);

    const totalRowsArray = Array.from({ length: w }, (_, i) => (totalRows - 1) * w + i + 1);

    const numAtTotalRow = totalRows % 2 === 1 ? totalRowsArray[numCol] : totalRowsArray.reverse()[numCol];

    return totalRows - numRow + (numAtTotalRow <= n ? 1 : 0);
}
