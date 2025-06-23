function solution(n) {
    let countOne = n.toString(2).split('1').length - 1;
    
    while (true) {
        n++;
        let nextCountOne = n.toString(2).split('1').length - 1;
        
        if (countOne === nextCountOne) {
            return n;
        }
    }
}
