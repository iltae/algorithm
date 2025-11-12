function solution(maps) {
    const map = maps.map(el => el.split(""));
    const R = map.length, C = map[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const visited = Array.from({length: R}, () => Array(C).fill(false));
    const foods = [];
    
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (map[i][j] === 'X') visited[i][j] = true;
        }
    }
    
    const bfs = (r, c) => {
        const queue = [[r, c]];
        visited[r][c] = true;
        
        let idx = 0, food = Number(map[r][c]);
        while (idx < queue.length) {
            const [r, c] = queue[idx++];
            
            for (const direction of directions) {
                const nr = r + direction[0];
                const nc = c + direction[1];
                
                if (nr >= 0 && nc >= 0 && nr < R && nc < C && !visited[nr][nc]) {
                    queue.push([nr, nc]);
                    visited[nr][nc] = true;
                    food += Number(map[nr][nc]);
                }
            }
        }
        
        return food;
    }
    
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if(!visited[i][j]) {
                foods.push(bfs(i, j));
            }
        }
    }
    
    if (!foods.length) return [-1];
    
    foods.sort((a, b) => a - b);
    
    return foods;
}