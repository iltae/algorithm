function solution(s){
    let count = 0;
    const arr = s.split("");
    
    for (let i = 0; i < arr.length; i++) {
        count += arr[i] === '(' ? 1 : -1;
        
        if(count < 0) return false;
    }
    
    if(count !== 0) return false;
    
    return true;
}