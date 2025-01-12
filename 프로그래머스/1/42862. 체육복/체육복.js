function solution(n, lost, reserve) {

    let realReserve = reserve.filter(r => !lost.includes(r));
    let realLost = lost.filter(l => !reserve.includes(l));


    const strategy1 = getMaxStudents(n, [...realLost], [...realReserve]);
    const strategy2 = getMaxStudents(n, [...realLost], [...realReserve], false);

    return Math.max(strategy1, strategy2);
}

function getMaxStudents(n, lost, reserve, checkFront = true) {
    for (let i = 0; i < reserve.length; i++) {
        let reserveStudent = reserve[i];
        
        if (checkFront) {
            if (lost.includes(reserveStudent - 1)) {
                lost = lost.filter(student => student !== reserveStudent - 1);
            } else if (lost.includes(reserveStudent + 1)) {
                lost = lost.filter(student => student !== reserveStudent + 1);
            }
        } else {
            if (lost.includes(reserveStudent + 1)) {
                lost = lost.filter(student => student !== reserveStudent + 1);
            } else if (lost.includes(reserveStudent - 1)) {
                lost = lost.filter(student => student !== reserveStudent - 1);
            }
        }
    }
    
    return n - lost.length;
}
