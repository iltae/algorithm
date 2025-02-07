function solution(maps) {
    const answer = [];
    const row = maps.length, col = maps[0].length;
    const visited = Array.from({ length: row}, () => Array(col).fill(false));
    const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    function dfs(x, y) {
        let size = +maps[x][y];
        visited[x][y] = true;
        
        for(let [dx, dy] of direction) {
            const newX = x + dx, newY = y + dy;
            
            if(newX >= 0 && newY >= 0 && newX < row && newY < col && maps[newX][newY] !== "X" && !visited[newX][newY]) {
                size += dfs(newX, newY);
            }
            
        }
        
        return size;    
    }
    
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(maps[i][j] !== "X" && !visited[i][j]) {
                answer.push(dfs(i, j));
            }
        }
    }
    
    answer.sort((a, b) => a - b);
    
    return answer.length > 0 ? answer : [-1] ;
}