function solution(triangle) {
    for (let i = triangle.length - 1; i > 0; i--) {
        for (let j = 0; j < triangle[i].length - 1; j++) {
            const left = triangle[i][j] || 0;
            const right = triangle[i][j + 1] || 0;
            triangle[i - 1][j] += Math.max(left, right);
        }
    }
  
    return triangle[0][0];
}