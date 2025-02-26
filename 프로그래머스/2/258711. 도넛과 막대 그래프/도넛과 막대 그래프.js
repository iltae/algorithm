function solution(edges) {
    let [point, donut, stick, eight] = [0, 0, 0, 0];
    const lines = new Map(), nodes = new Map();
    
    edges.forEach(([from, to]) => {
        nodes.set(from, (nodes.get(from) || 0) + 1);
        lines.set(to, [...(lines.get(to)) || [], from])
    });
    
    // 정점 찾기
    for(let [i, _] of [...nodes].sort((a, b) => b[1] - a[1])){
        if(!lines.get(i)) {
            point = i;
            break;
        }
    }
    
    // 그래프 검사
    const checkGraph = (startnode) => {
        let nexts = lines.get(startnode).filter(v => v != point);
        
        while(nexts.length) {

            if(nexts.length > 1) {
                eight++;
                return;
            }
            
            let next = nexts.shift();
            
            if(next === startnode) {
                donut++;
                return;
            }
            
            if(lines.get(next)) nexts.push(...lines.get(next));
        }
        
        stick++;
        return;
    }
    
    for(let node of lines.keys()) {
        if(lines.get(node).includes(point)) checkGraph(node);
    }
    
    return [point, donut, stick, eight];
}