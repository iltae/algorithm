function solution(park, routes) {
    let dog;
    const direction = {N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1]};

    // 시작 위치 찾기
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === "S") {
                dog = [i, j];
                break;
            }
        }
    }

    // 명령 순회
    routes.forEach(el => {
        const [way, count] = el.split(" ");
        const steps = parseInt(count);

        let canMove = true;
        let tempDog = [...dog];
        
        for (let i = 0; i < steps; i++) {
            tempDog[0] += direction[way][0];
            tempDog[1] += direction[way][1];

            if (tempDog[0] < 0 || tempDog[0] >= park.length || tempDog[1] < 0 || tempDog[1] >= park[0].length || park[tempDog[0]][tempDog[1]] === "X") {
                canMove = false;
                break;
            }
        }

        if (canMove) {
            dog = tempDog;
        }
    });

    return dog;
}
