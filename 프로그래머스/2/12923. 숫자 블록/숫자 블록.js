function solution(begin, end) {
    let answer = [];
    
    const divide = (num) => {
        if(num === 1) return 0;
        
        let answer = 1, idx = 2;
        
        while(idx <= Math.sqrt(num)){
            if(num % idx === 0){
                if(num / idx <= 10000000) return num / idx;
                else answer = idx;
            } 
            idx++;
        }
        
        return answer;
    }
    
    for(let i = begin; i <= end; i++){
        answer.push(divide(i));
    }
    
    return answer;
}