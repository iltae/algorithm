function solution(weights) {
    let answer = 0;
    const store = {};
    const ratios = [3/2, 4/2, 4/3];

    weights.forEach(w => {
        store[w] = (store[w] || 0) + 1;
    });

    const uniqueWeights = Object.keys(store).map(Number).sort((a, b) => a - b);

    uniqueWeights.forEach(w => {
        const count = store[w];

        if (count > 1) {
            answer += (count * (count - 1)) / 2;
        }

        ratios.forEach(r => {
            const target = w * r;
            if (store[target]) {
                answer += count * store[target];
            }
        });
    });

    return answer;
}