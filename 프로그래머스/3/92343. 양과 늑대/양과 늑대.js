function solution(info, edges) {
    const tree = Array.from({length: info.length}, () => []);
    
    edges.forEach(([from, to]) => {
        tree[from].push(to);
    });
    
    let maxBaa = 0;
    
    const dfs = (node, sheep, wolves, next) => {
        let possible =  [...next].filter(el => el !== node);
        
        if(info[node]) {
            wolves++;
        } else {
            sheep++;
        }
        
        if(wolves === sheep) return;
        
        maxBaa = Math.max(maxBaa, sheep);
        
        possible.push(...tree[node]);
        
        for(let next of possible) {
            dfs(next, sheep, wolves, possible);
        }
    }
    
    dfs(0, 0, 0, [0]);
    
    return maxBaa;
}