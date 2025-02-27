function solution(users, emoticons) {
    let [subscriber, sales] = [0, 0];
    const discounts = [10, 20, 30, 40], combinations = [];
    
    const dfs = (emoticons, array) => {
        if (emoticons.length === 0) {
            combinations.push(array);
            return;
        }
      
        for (const discount of discounts) {
            dfs(emoticons.slice(1), [...array, discount]);
        }
    }
  
    dfs(emoticons, []);
    
    console.log(combinations);
    
    for (const combination of combinations) {
        let [plus, total] = [0, 0];
        
        for (const [percentage, limit] of users) {
            let cost = 0, flag = false;
        
            for (let i = 0; i < combination.length; i++) {
                
                if (percentage > combination[i]) continue;
                
                cost += emoticons[i] - (emoticons[i] * (combination[i] / 100));
                
                if (cost >= limit) {
                    flag = true;
                    break;
                }
            }
            
            flag ? plus++ : total += cost;
        }
        
        if (plus > subscriber || (plus === subscriber && total > sales)) {
            [subscriber, sales] = [plus, total];
        }
    }
    
    return [subscriber, sales];
}
