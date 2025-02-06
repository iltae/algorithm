function solution(maps) {
    const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let start = [], lever = [], exit = [];

    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[i].length; j++) {
            if (maps[i][j] === "S") start = [i, j];
            if (maps[i][j] === "L") lever = [i, j];
            if (maps[i][j] === "E") exit = [i, j];
        }
    }

    function bfs(start, goal) {
        const queue = [[start[0], start[1], 0]];
        const visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
        visited[start[0]][start[1]] = true;

        while (queue.length) {
            const [x, y, dist] = queue.shift();

            if (x === goal[0] && y === goal[1]) return dist;

            for (let [dx, dy] of direction) {
                const newX = x + dx;
                const newY = y + dy;

  
                if (newX >= 0 && newX < maps.length && newY >= 0 && newY < maps[0].length && !visited[newX][newY] && maps[newX][newY] !== 'X') {
                    visited[newX][newY] = true;
                    queue.push([newX, newY, dist + 1]);
                }
            }
        }
        return -1; 
    }

    const toLever = bfs(start, lever);
    if (toLever === -1) return -1;

    const toExit = bfs(lever, exit);
    if (toExit === -1) return -1;

    return toLever + toExit;
}
