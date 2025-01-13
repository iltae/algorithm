function solution(wallpaper) {
    let lux = Infinity, luy = Infinity, rdx = -Infinity, rdy = -Infinity;
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') {
                lux = Math.min(lux, i);
                luy = Math.min(luy, j);
                rdx = Math.max(rdx, i + 1);
                rdy = Math.max(rdy, j + 1);
            }
        }
    }
    
    return [lux, luy, rdx, rdy];
}
