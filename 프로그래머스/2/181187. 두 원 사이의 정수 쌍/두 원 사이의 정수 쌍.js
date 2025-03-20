function solution(r1, r2) {
    let answer = 0; 
    let r1Square = r1 * r1, r2Square = r2 * r2;
    
    for (let x = 1; x <= r2; x++) {
        let xSquare = x * x;
        
        let maxY = Math.floor(Math.sqrt(r2Square - xSquare));
        let minY = Math.ceil(Math.sqrt(r1Square - xSquare)) || 0;

        answer += maxY - minY + 1;
    }

    return answer * 4;
}
