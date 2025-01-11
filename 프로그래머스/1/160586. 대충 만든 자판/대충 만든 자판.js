function solution(keymap, targets) {
    const map = {};
    keymap.forEach(btn => {
        for(let i = 0; i < btn.length; i++) {
            if(btn[i] in map) {
                map[btn[i]] = Math.min(map[btn[i]], i + 1);
            } else {
                map[btn[i]] = i + 1;
            }
        }
    })
    return targets.map(el => {
        const num =  el.split("").reduce((acc, cur) => acc + map[cur], 0)
        if (!num) return -1;
        return num;
    });
}