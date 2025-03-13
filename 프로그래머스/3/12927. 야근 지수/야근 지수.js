function solution(n, works) {
    works.sort((a, b) => b - a);
    
    for (let i = 0; i < n; i++) {
        if (works[0] > 0) {
            works[0] -= 1;
        } else {
            break;
        }
        
        let j = 0;
        
        while (j + 1 < works.length && works[j] < works[j + 1]) {
            [works[j], works[j + 1]] = [works[j + 1], works[j]];
            j++;
        }
    }
    
    let totalFatigue = 0;
    
    for (let work of works) {
        totalFatigue += work * work;
    }

    return totalFatigue;
}
