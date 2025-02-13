function solution(orders, course) {
    const result = [];

    course.forEach((courseSize) => {
        const combinations = {};

        orders.forEach((order) => {
            const orderArr = order.split('').sort();
            
            getCombinations(orderArr, courseSize).forEach((combination) => {
                const comb = combination.join('');
                combinations[comb] = (combinations[comb] || 0) + 1;
            });
        });

        const maxCount = Math.max(...Object.values(combinations).filter(count => count > 1));

        for (const [comb, count] of Object.entries(combinations)) {
            if (count === maxCount && count > 1) {
                result.push(comb);
            }
        }
    });

    return result.sort();
}

function getCombinations(arr, size) {
    const result = [];
    if (size === 1) return arr.map(item => [item]);

    arr.forEach((item, idx) => {
        const remainingArr = arr.slice(idx + 1);
        const combinations = getCombinations(remainingArr, size - 1);
        combinations.forEach(comb => result.push([item, ...comb]));
    });

    return result;
}
