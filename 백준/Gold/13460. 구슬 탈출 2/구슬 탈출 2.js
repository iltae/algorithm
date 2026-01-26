const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const [N, M] = input[0].split(" ").map(Number);
const boards = input.slice(1).map(board => board.split(""));

let R, B;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (boards[i][j] === 'R') R = [i, j];
        if (boards[i][j] === 'B') B = [i, j];
    }
}

function bfs(sRR, sRC, sBR, sBC) {
    const queue = [[sRR, sRC, sBR, sBC, 1]];
    const visited = new Set();
    visited.add(`${sRR},${sRC},${sBR},${sBC}`);

    let head = 0;
    while (head < queue.length) {
        const [rR, rC, bR, bC, dist] = queue[head++];

        if (dist > 10) break;

        for (const [dr, dc] of directions) {
            let [nrR, nrC, rCnt] = move(rR, rC, dr, dc);
            let [nbR, nbC, bCnt] = move(bR, bC, dr, dc);

            if (boards[nbR][nbC] === 'O') continue;
            if (boards[nrR][nrC] === 'O') return dist;

            if (nrR === nbR && nrC === nbC) {
                if (rCnt > bCnt) { nrR -= dr; nrC -= dc; }
                else { nbR -= dr; nbC -= dc; }
            }

            const state = `${nrR},${nrC},${nbR},${nbC}`;

            if (!visited.has(state)) {
                visited.add(state);
                queue.push([nrR, nrC, nbR, nbC, dist + 1]);
            }
        }
    }
    return -1;
}

function move(r, c, dr, dc) {
    let count = 0;
    while (boards[r + dr][c + dc] !== '#' && boards[r][c] !== 'O') {
        r += dr;
        c += dc;
        count++;
    }
    return [r, c, count];
}

console.log(bfs(R[0], R[1], B[0], B[1]));