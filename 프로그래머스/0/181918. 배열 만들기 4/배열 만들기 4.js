function solution(arr) {
    let stk = [], i = 0;
    const len = arr.length;
    while(len > i) {
        if(!stk.length) {
            stk.push(arr[i]);
            i += 1;
        } else {
            if(stk[stk.length-1] < arr[i]) {
                stk.push(arr[i]);
                i += 1;
            } else {
                stk.pop();
            }
        }
    }
    return stk;
}