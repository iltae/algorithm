function solution(prices) {
    const stack = [], result = Array(prices.length).fill(0);

    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
            const idx = stack.pop()
            result[idx] = i - idx;
        }
        
        stack.push(i);
    }
    
    while (stack.length) {
        const idx = stack.pop();
        result[idx] = prices.length - 1 - idx;
    }
    
    return result
}