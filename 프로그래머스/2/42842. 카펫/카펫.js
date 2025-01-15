function solution(brown, yellow) {
    const total = brown + yellow;
    for (let w = 3; w <= Math.sqrt(total); w++) {
        if (total % w === 0) {
            let h = total / w;
            if (2 * (w + h) - 4 === brown) {
                return [Math.max(w, h), Math.min(w, h)];
            }
        }
    }
    return [];
}
