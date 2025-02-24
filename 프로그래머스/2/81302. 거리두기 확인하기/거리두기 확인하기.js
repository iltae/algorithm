function solution(places) {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    const dfs = (x, y, dist, place) => {
        if (place[x][y] === 'P') return true;
        
        for (let [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
                
            if (0 <= nx && nx < 5 && 0 <= ny && ny < 5 && place[nx][ny] !== 'X' && dist < 2) {
                if (dfs(nx, ny, dist + 1, place)) return true;
            }
        }
        
        return false;
    }
    
    const checkDistance = (place) => {
        for (let i = 0 ; i < 5 ; i++) {
            for (let j = 0 ; j < 5 ; j++) {
                if (place[i][j] !== "P") continue;
                
                place[i] = place[i].slice(0, j) + "X" + place[i].slice(j + 1);
                
                if (dfs(i, j, 0, place)) return 0;
            }
        }
        
        return 1;
    }
    
    return places.map(place => checkDistance(place));
}