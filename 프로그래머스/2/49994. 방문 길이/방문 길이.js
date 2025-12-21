function solution(dirs) {
    const directions = {'U': [0, 1], 'D': [0, -1], 'R': [1, 0], 'L': [-1, 0]};
    const visitedPaths = new Set();
    
    let x = 0, y = 0;
    
    for (const dir of dirs) {
        const [dx, dy] = directions[dir];
        const nx = x + dx;
        const ny = y + dy;
        
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

        const pathKey = x < nx || (x === nx && y < ny)? `${x},${y}-${nx},${ny}` : `${nx},${ny}-${x},${y}`;
        
        visitedPaths.add(pathKey);
        
        x = nx;
        y = ny;
    }
    
    return visitedPaths.size;
}