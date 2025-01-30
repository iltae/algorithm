function solution(triangle) {
    for (let row = triangle.length - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            triangle[row][col] += Math.max(triangle[row + 1][col], triangle[row + 1][col + 1]);
        }
    }
    
    return triangle[0][0];
}
