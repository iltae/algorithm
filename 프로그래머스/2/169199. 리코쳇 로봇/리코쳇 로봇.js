function solution(board) {
    const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let start = [], end = [];
    let min = Infinity;
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === "R") {
                start = [i, j];
            }
            if(board[i][j] === "G") {
                end = [i, j];
            }
        }
    }

    const visited = Array.from({ length: board.length }, () => Array(board[0].length).fill(false));
    
    const queue = [[start[0], start[1], 0]];
    visited[start[0]][start[1]] = true;
    
    while (queue.length > 0) {
        const [x, y, count] = queue.shift();

        if (x === end[0] && y === end[1]) {
            return count;
        }
        
        for (let [dx, dy] of direction) {
            let newX = x, newY = y;
            
            while (newX + dx >= 0 && newY + dy >= 0 && newX + dx < board.length && newY + dy < board[0].length && board[newX + dx][newY + dy] !== "D") {
                newX += dx;
                newY += dy;
            }

            if (!visited[newX][newY]) {
                visited[newX][newY] = true;
                queue.push([newX, newY, count + 1]);
            }
        }
    }
    
    return -1;
}
