function solution(expression) {
    const operatorPriority = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '+', '-'],
        ['*', '-', '+']
    ];
    
    function calculate(expr, priority) {
        let arr = expr.split(/([+\-*])/);
        for (let op of priority) {
            let i = 0;
            while (i < arr.length) {
                if (arr[i] === op) {
                    const num1 = +arr[i - 1], num2 = +arr[i + 1];
                    let result;
                    
                    switch (op) {
                        case "+" : result = num1 + num2; break;
                        case "-" : result = num1 - num2; break;
                        case "*" : result = num1 * num2; break;
                    }

                    arr.splice(i - 1, 3, result.toString());
                    i -= 2;
                }
                i++;
            }
        }
        return Math.abs(+arr[0]);
    }
    
    let max = 0;
    
    for (let priority of operatorPriority) {
        let result = calculate(expression, priority);
        max = Math.max(max, result);
    }
    
    return max;
}
