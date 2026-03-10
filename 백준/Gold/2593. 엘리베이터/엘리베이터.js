const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);

const floors = Array.from({ length: N + 1 }, () => []);

// 층 별 도착 가능 엘리베이터 설정
for (let i = 1; i <= M; i++) {
    const [start, interval] = input[i].split(" ").map(Number);

    for (let j = start; j <= N; j += interval) {
        floors[j].push(i);
    }
}

const [A, B] = input[M + 1].split(" ").map(Number);

const visitedElevators = Array(M + 1).fill(false);
const visitedFloors = Array(N + 1).fill(false);
const prevElevators = Array(M + 1).fill(0);

const queue = [];
let targetElevator = -1;

// 출발 층 처리
visitedFloors[A] = true;
for (const ev of floors[A]) {
    visitedElevators[ev] = true;
    queue.push(ev);

    const [start, interval] = input[ev].split(" ").map(Number);

    if (B >= start && (B - start) % interval === 0) {
        targetElevator = ev;
        break;
    }
}

let head = 0;

while (head < queue.length && targetElevator === -1) {
    const curr = queue[head++];
    const [start, interval] = input[curr].split(" ").map(Number);

    // 해당 엘리베이터에서 가능한 모든 층 수 방문 처리
    // 그리고 해당 층에서 이용 가능한 엘리베이터를 큐에 삽입 및 엘리베이터 추적 기록
    for (let floor = start; floor <= N; floor += interval) {
        if (visitedFloors[floor]) continue;
        visitedFloors[floor] = true;

        for (const nextEv of floors[floor]) {
            if (!visitedElevators[nextEv]) {
                visitedElevators[nextEv] = true;
                prevElevators[nextEv] = curr;
                queue.push(nextEv);

                const [nStart, nInterval] = input[nextEv].split(" ").map(Number);

                if (B >= nStart && (B - nStart) % nInterval === 0) {
                    targetElevator = nextEv;
                    break;
                }
            }
        }

        if (targetElevator !== -1) break;
    }
}

if (targetElevator === -1) {
    console.log("-1");
} else {
    const path = [];
    let curr = targetElevator;

    while (curr !== 0) {
        path.push(curr);
        curr = prevElevators[curr];
    }

    path.reverse();

    console.log(path.length);
    console.log(path.join('\n'));
}