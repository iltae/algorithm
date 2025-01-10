function solution(dartResult) {
    let answer = 0, score = 0, prev = 0, idx = 0;
    
    while (idx < dartResult.length) {
        let number = 0;
        
        // 점수 영역
        if (dartResult[idx] >= '0' && dartResult[idx] <= '9') {
            number = parseInt(dartResult[idx]);
            if (dartResult[idx + 1] === '0') {
                number = 10;
                idx++;
            }
            score = number;
        }
        
        let bonus = dartResult[idx + 1];
        
        // 보너스 영역
        if (bonus === 'S') {
            score = Math.pow(score, 1);
        } else if (bonus === 'D') {
            score = Math.pow(score, 2);
        } else if (bonus === 'T') {
            score = Math.pow(score, 3);
        }
        
        idx += 2;
        
        // 옵션 영역
        if (idx < dartResult.length && (dartResult[idx] === '*' || dartResult[idx] === '#')) {
            let option = dartResult[idx];
            
            if (option === '*') {
                score *= 2;
                if (prev !== 0) {
                    answer += prev;
                    prev *= 2;
                }
            } else if (option === '#') {
                score *= -1;
            }
            
            idx++;
        }
        
        // 할당 및 초기화 
        answer += score;
        prev = score;
        score = 0;
    }
    
    return answer;
}
