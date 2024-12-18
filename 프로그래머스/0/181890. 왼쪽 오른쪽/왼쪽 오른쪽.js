function solution(str_list) {
    let answer = [];
    
    const firstL = str_list.indexOf("l");
    const firstR = str_list.indexOf("r");

    if (firstL !== -1 && (firstR === -1 || firstL < firstR)) {
        answer = str_list.slice(0, firstL);
    } else if (firstR !== -1) {
        answer = str_list.slice(firstR + 1);
    }
    
    return answer;
}
