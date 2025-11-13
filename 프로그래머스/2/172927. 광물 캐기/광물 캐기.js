function solution(picks, minerals) {
    const fatigue = {
        "diamond": { "diamond": 1, "iron": 1, "stone": 1 },
        "iron": { "diamond": 5, "iron": 1, "stone": 1 },
        "stone": { "diamond": 25, "iron": 5, "stone": 1 }
    };
    
    let chunks = [];
    
    const count = picks.reduce((acc, cur) => acc + cur, 0);
    const canMine = minerals.slice(0, count * 5);
    
    for (let i = 0; i < canMine.length; i += 5) {
        const currentMine = canMine.slice(i, i + 5);
        const cost = {diamond: 0, iron: 0, stone: 0};
        
        for (const mine of currentMine) {
            cost["diamond"] += fatigue["diamond"][mine];
            cost["iron"] += fatigue["iron"][mine];
            cost["stone"] += fatigue["stone"][mine];     
        }
        
        chunks.push(cost);
    }
    
    chunks.sort((a, b) => b.stone - a.stone);
    
    let pickCounts = [...picks];
    
    let result = 0;
    
    for (const chunk of chunks) {
        if (pickCounts[0] > 0) {
            result += chunk["diamond"];
            pickCounts[0]--;
        } else if (pickCounts[1] > 0) {
            result += chunk["iron"];
            pickCounts[1]--;
        } else {
            result += chunk["stone"];
            pickCounts[2]--;
        }
    }
    
    return result;
}