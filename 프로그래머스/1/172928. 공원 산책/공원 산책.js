function solution(park, routes) {
    let position;
    const directions = {N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1]};
    const R = park.length, C = park[0].length;
    
    outer: for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (park[i][j] === "S") {
                position = [i, j];
                break outer;
            }
        }
    }
    
    outer: for (const route of routes) {
        const [direction, count] = route.split(" ");
        let [r, c] = position;
        
        for(let i = 1; i <= Number(count); i++) {
            let nr = r + directions[direction][0];
            let nc = c + directions[direction][1];
            
            if ((nr < 0 || nc < 0 || nr >= R || nc >= C) || park[nr][nc] === 'X') {
                continue outer;
            }
            
            r = nr;
            c = nc;
        }
        
        position = [r, c];
        
    }
    
    return position;
}