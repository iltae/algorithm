function solution(n, works) {
    if (works.reduce((a, b) => a + b, 0) <= n) return 0;

    works.sort((a, b) => b - a);

    while (n > 0) {
        const maxVal = works[0];
        let count = 0;
        
        for (let i = 0; i < works.length; i++) {
            if (works[i] === maxVal) count++;
            else break;
        }

        if (n < count) {
            for (let i = 0; i < n; i++) works[i]--;
            break;
        }

        const nextMax = works[count] || 0;
        
        let diff = Math.min(maxVal - nextMax, Math.floor(n / count)) || 1;

        for (let i = 0; i < count; i++) {
            works[i] -= diff;
            n -= diff;
        }
    }

    return works.reduce((acc, cur) => acc + (cur > 0 ? cur ** 2 : 0), 0);
}