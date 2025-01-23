function solution(n) {
    const arr = Array.from({ length: n }, (_, idx) => Array(idx + 1).fill(0));
    let count = 1;
    let x = 0, y = 0;
    const direction = [[1, 0], [0, 1], [-1, -1]];
    
    arr[0][0] = count++;

    while (count <= n * (n + 1) / 2) {
        for (let [dx, dy] of direction) {
            while (true) {
                let newX = x + dx;
                let newY = y + dy;

                if (newX < 0 || newY < 0 || newX >= n || newY >= arr[newX].length || arr[newX][newY] !== 0) {
                    break;
                }

                arr[newX][newY] = count++;
                x = newX;
                y = newY;
            }
        }
    }

    return arr.flat();
}
