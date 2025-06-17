function solution(line) {
    const points = [];

    for (let i = 0; i < line.length - 1; i++) {
        for (let j = i + 1; j < line.length; j++) {
            const [A, B, E] = line[i];
            const [C, D, F] = line[j];

            const denominator = A * D - B * C;

            if (denominator === 0) continue;

            const xMolecule = B * F - E * D;
            const yMolecule = E * C - A * F;

            const x = xMolecule / denominator;
            const y = yMolecule / denominator;

            if (Number.isInteger(x) && Number.isInteger(y)) {
                points.push([x, y]);
            }
        }
    }

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    
    for (const [x, y] of points) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
    }

    const width = maxX - minX + 1;
    const height = maxY - minY + 1;

    const board = Array.from({ length: height }, () => Array(width).fill('.'));

    for (const [x, y] of points) {
        const row = maxY - y;
        const col = x - minX;
        board[row][col] = '*';
    }

    return board.map(row => row.join(''));
}
