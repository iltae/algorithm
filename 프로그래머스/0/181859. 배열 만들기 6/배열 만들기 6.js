function solution(arr) {
    let stk = [], i = 0;
    const len = arr.length;
    while(len > i) {
        if(!stk.length) {
        stk.push(arr[i]);
        } else {
            if(stk[stk.length-1] === arr[i]) {
                stk.pop();
            } else {
                stk.push(arr[i])
            }
        }
        i += 1;
    }
    return stk.length? stk : [-1];
}