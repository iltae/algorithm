function solution(info, query) {
    const db = {};

    function makeCombinations(arr, score, start, comb) {
        const key = comb.join(" ");
        if (!db[key]) db[key] = [];
        db[key].push(score);

        for (let i = start; i < arr.length; i++) {
            const temp = comb.slice();
            temp[i] = '-';
            makeCombinations(arr, score, i + 1, temp);
        }
    }

    info.forEach(entry => {
        const parts = entry.split(' ');
        const score = Number(parts.pop());
        makeCombinations(parts, score, 0, parts);
    });

    for (let key in db) {
        db[key].sort((a, b) => a - b);
    }

    function lowerBound(arr, target) {
        let left = 0, right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] >= target) right = mid;
            else left = mid + 1;
        }
        return arr.length - left;
    }

    const answer = query.map(q => {
        const parts = q.replace(/ and /g, ' ').split(' ');
        const score = Number(parts.pop());
        const key = parts.join(' ');
        if (!db[key]) return 0;
        return lowerBound(db[key], score);
    });

    return answer;
}
