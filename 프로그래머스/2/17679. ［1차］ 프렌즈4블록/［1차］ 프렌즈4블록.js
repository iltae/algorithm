function solution(m, n, board) {
    let answer = 0;
    board = board.map(row => row.split(''));

    const checkBlock = () => {
        const toDelete = [];
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const block = board[i][j];
                if (block !== '0' && block === board[i+1][j] && block === board[i][j+1] && block === board[i+1][j+1]) {
                    toDelete.push([i, j]);
                }
            }
        }
        return toDelete;
    };

    const removeBlocks = (toDelete) => {
        let count = 0;
        toDelete.forEach(([i, j]) => {
            if (board[i][j] !== '0') {
                board[i][j] = '0';
                count++;
            }
            if (board[i+1][j] !== '0') {
                board[i+1][j] = '0';
                count++;
            }
            if (board[i][j+1] !== '0') {
                board[i][j+1] = '0';
                count++;
            }
            if (board[i+1][j+1] !== '0') {
                board[i+1][j+1] = '0';
                count++;
            }
        });
        return count;
    };

    const dropBlocks = () => {
        for (let j = 0; j < n; j++) {
            let column = [];
            for (let i = 0; i < m; i++) {
                if (board[i][j] !== '0') {
                    column.push(board[i][j]);
                }
            }
            while (column.length < m) {
                column.unshift('0');
            }
            for (let i = 0; i < m; i++) {
                board[i][j] = column[i];
            }
        }
    };

    while (true) {
        const toDelete = checkBlock();
        if (toDelete.length === 0) {
            break;
        }
        answer += removeBlocks(toDelete);
        dropBlocks();
    }

    return answer;
}
