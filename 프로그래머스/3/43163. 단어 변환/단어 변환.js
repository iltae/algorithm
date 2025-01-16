function solution(begin, target, words) {
    if (!words.includes(target)) return 0;

    const queue = [[begin, 0]];
    const visited = new Set();
    visited.add(begin);

    while (queue.length) {
        const [word, count] = queue.shift();

        if (word === target) {
            return count;
        }

        for (let i = 0; i < words.length; i++) {
            const el = words[i];
            
            if (!visited.has(el) && el.split("").filter((el, idx) => el === word[idx]).length === el.length - 1) {
                queue.push([el, count + 1]);
                visited.add(el);
            }
        }
    }

    return 0;
}
