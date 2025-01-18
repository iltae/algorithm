function solution(cacheSize, cities) {
    let answer = 0;

    if (cacheSize === 0) {
        return cities.length * 5;
    }
    
    const cache = new Set();
    
    cities.forEach(city => {
        const cityLower = city.toLowerCase();
        
        if (cache.has(cityLower)) {
            answer += 1;
            cache.delete(cityLower);
            cache.add(cityLower);
        } else {
            answer += 5;
            if (cache.size === cacheSize) {
                cache.delete(cache.keys().next().value);
            }
            cache.add(cityLower);
        }
    });
    
    return answer;
}
