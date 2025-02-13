function solution(n, m, x, y, r, c, k) {
    const answer = [];
    const direction = [["d", 1, 0], ["l", 0, -1], ["r", 0, 1], ["u", -1, 0]];
    
    const memo = new Map();

    function dfs(row, col, move, commands) {
        const key = `${row},${col},${move}`;
        if (memo.has(key)) return memo.get(key);

        if (move === k) {
            if (row === r - 1 && col === c - 1) {
                answer.push(commands);
            }
            memo.set(key, answer);
            return;
        }

        for (let [command, dx, dy] of direction) {
            const newX = row + dx, newY = col + dy;
            
            if (newX >= 0 && newY >= 0 && newX < n && newY < m) {
                dfs(newX, newY, move + 1, commands + command);
            }
        }

        memo.set(key, answer);
    }
    
    dfs(x - 1, y - 1, 0, "");

    return answer.length ? answer[0] : "impossible";
}
