function format(str) {
    const [hour, minute] = str.split(":");
    return Number(hour) * 60 + Number(minute);
}

function solution(plans) {
    const answer = [], stack = [];
    const arr = plans.map(([name, start, playtime]) => [name, format(start), Number(playtime)]);
    arr.sort((a, b) => a[1] - b[1]);
    
    while(arr.length) {
        const [name, start, playTime] = arr.shift();
        const endTime = start + playTime;
        
        if(arr.length) {
            const [_, nextStart] = arr[0];
            
            if(endTime > nextStart) {
                stack.push([name, endTime - nextStart]);
            } else {
                answer.push(name);
                
                if(stack.length && endTime < nextStart) {
                    const [rName, rTime] = stack.pop();
                    arr.unshift([rName, endTime, rTime])
                }
            }
        } else {
            answer.push(name);
        }
    }
    
    answer.push(...stack.reverse().map(el => el[0]));
    
    return answer;
}
