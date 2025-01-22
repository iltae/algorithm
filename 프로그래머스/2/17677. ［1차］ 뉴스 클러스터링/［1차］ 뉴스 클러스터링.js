function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    function getValidPairs(str) {
        const pairs = [];
        for (let i = 0; i < str.length - 1; i++) {
            const pair = str.slice(i, i + 2);
            if (pair.match(/^[a-z]{2}$/)) {
                pairs.push(pair);
            }
        }
        return pairs;
    }

    const set1 = getValidPairs(str1);
    const set2 = getValidPairs(str2);

    let intersection = 0;
    let union = set1.length + set2.length;

    const map1 = new Map();
    const map2 = new Map();

    for (const item of set1) {
        map1.set(item, (map1.get(item) || 0) + 1);
    }

    for (const item of set2) {
        map2.set(item, (map2.get(item) || 0) + 1);
    }

    for (const [key, value] of map1) {
        if (map2.has(key)) {
            intersection += Math.min(value, map2.get(key));
        }
    }

    union -= intersection;

    let answer = 0;
    
    if (union !== 0) {
        answer = Math.floor((intersection / union) * 65536);
    } else {
        answer = 65536;
    }

    return answer;
}
