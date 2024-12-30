function solution(sizes) {
    let maxWidth = 0, maxHeight = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        let [w, h] = sizes[i];
        
        let width = Math.max(w, h);
        let height = Math.min(w, h);
        
        maxWidth = Math.max(maxWidth, width);
        maxHeight = Math.max(maxHeight, height);
    }
    
    return maxWidth * maxHeight;
}
