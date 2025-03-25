function solution(board) {
    let Ocount = 0, Xcount = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === "O") Ocount++;
            if (board[i][j] === "X") Xcount++;
        }
    }

    if (Xcount > Ocount || Ocount > Xcount + 1) return 0;

    const checkWin = (player) => {
        for (let i = 0; i < 3; i++) {
            if ((board[i][0] === player && board[i][1] === player && board[i][2] === player) ||
                (board[0][i] === player && board[1][i] === player && board[2][i] === player)) {
                return true;
            }
        }
        
        if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
            (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
            return true;
        }
        
        return false;
    };

    const Owin = checkWin("O");
    const Xwin = checkWin("X");

    if (Owin && Xwin) return 0;
    if (Owin && Ocount !== Xcount + 1) return 0;
    if (Xwin && Ocount !== Xcount) return 0;
    
    return 1;
}
