function solution(s) {
    let x = 0, answer = 0;
    while (x < s.length) {
        if (isValid(s)) {
            answer++;
        }
        s = s.slice(1) + s[0];
        x++;
    }
    return answer;
}

// 여는 괄호만 스택에 넣고 닫는 괄호가 등장했을 때 스택 마지막 괄호와 쌍이어야 올바른 괄호 문자열
function isValid(str) {
    const stack = [];
    
    for (let char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            const last = stack.pop();
            if (
                (char === ')' && last !== '(') ||
                (char === ']' && last !== '[') ||
                (char === '}' && last !== '{')
            ) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}
