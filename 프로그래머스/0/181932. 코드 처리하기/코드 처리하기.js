function solution(code) {
    let answer = [], mode = 0;
    
    code.split("").forEach((el, idx) => {
        if(mode === 0) {
            if(el !== "1") {
                if(idx % 2 === 0) {
                    answer.push(el);
                }
            } else {
                mode = 1;
            }
        } else {
            if(el !== "1") {
                if(idx % 2 === 1) {
                    answer.push(el);
                }
            } else {
                mode = 0;
            }
        }
    });
    return answer.length ? answer.join("") : "EMPTY";
}