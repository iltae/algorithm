function solution(name, yearning, photo) {
    const scoreMap = {};
    
    name.forEach((el, idx) => {
        scoreMap[el] = yearning[idx];
    })
    
    return photo.map((el) => {
        return el.reduce((acc, cur) => acc + (scoreMap[cur] || 0), 0);
    });
}
