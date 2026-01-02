function solution(clothes) {
    const obj = {};
    
    clothes.forEach(el => {
        const [value, key] = el;
        obj[key] = obj[key] || [];
        obj[key].push(value);
    })

    let result = 1;
    
    for (const key of Object.keys(obj)) {
        result *= obj[key].length + 1
    }
    
    return result - 1;
}