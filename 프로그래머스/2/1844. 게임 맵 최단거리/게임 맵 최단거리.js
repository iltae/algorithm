function solution(maps) {
    const n = maps.length, m = maps[0].length;
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    
    const queue = [];
    queue.push([0, 0, 1]);
    maps[0][0] = 0;
    
    let idx = 0;
    
    while (idx < queue.length) {
        const [x, y, dist] = queue[idx++];
        
        if (x === m - 1 && y === n - 1) return dist;
        
        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;
            
            if (nx >= 0 && ny >= 0 && nx < m && ny < n && maps[ny][nx] === 1) {
                maps[ny][nx] = 0;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    
    return -1;
}