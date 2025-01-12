function solution(board, moves) {
    let answer = 0;
    const stack = [];
    
    for(let i = 0; i < moves.length; i++) {
        let col = moves[i] - 1;
        for(let j = 0; j < board.length; j++) {
            if(board[j][col] !== 0) {
                stack.push(board[j][col]);
                board[j][col] = 0;
                
                if(stack.length >= 2 && stack[stack.length - 1] === stack[stack.length - 2]) {
                    stack.pop();
                    stack.pop();
                    answer += 2;
                }
                
                break;
            }
        }
    }
    
    return answer;
}