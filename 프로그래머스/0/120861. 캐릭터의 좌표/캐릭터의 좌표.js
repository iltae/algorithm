function solution(keyinput, board) {
    const pos = [0, 0];
    
    keyinput.forEach(input => {
        switch(input) {
            case "right" : {
                pos[0] = pos[0] !== (board[0] - 1) / 2 ? pos[0] + 1 : pos[0];
                break; 
            }
            case "left" : {
                pos[0] = -pos[0] !== (board[0] - 1) / 2 ? pos[0] - 1: pos[0];
                break;
            }
            case "down" : {
                pos[1] = -pos[1] !== (board[1] - 1) / 2 ? pos[1] - 1: pos[1];
                break;
            }
            case "up" : {
                pos[1] = pos[1] !== (board[1] - 1) / 2 ? pos[1] + 1 : pos[1];
                break; 
            }
        }
    })
    
    return pos;
}