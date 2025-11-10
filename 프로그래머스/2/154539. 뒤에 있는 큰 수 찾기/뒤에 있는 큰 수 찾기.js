function solution(numbers) {
    const stack = [];
    const result = Array(numbers.length).fill(-1);
    
    for (let i = 0; i < numbers.length; i++) {
        while (stack.length && numbers[i] > stack[stack.length - 1][0]) {
            const [num, idx] = stack.pop();
            result[idx] = numbers[i];
        }
        stack.push([numbers[i], i]);
    }
    
    return result;
}