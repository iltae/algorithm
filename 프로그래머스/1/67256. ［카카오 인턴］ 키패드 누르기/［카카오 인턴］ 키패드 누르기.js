function solution(numbers, hand) {
    let answer = '', leftIdx = [3, 0], rightIdx = [3, 2];
    numbers.forEach(number => {
        if(number === 1 || number === 4 || number === 7) {
            answer += "L";
            leftIdx = [Math.floor(number / 3), 0];
        }
        else if(number === 3 || number === 6 || number === 9) {
            answer += "R";
            rightIdx = [Math.floor(number / 3 - 1), 2];
        }
        else {
            const col = number !== 0 ? Math.floor(number / 3) : 3;
            const distL = Math.abs(col - leftIdx[0]) + 1 - leftIdx[1];
            const distR = Math.abs(col - rightIdx[0]) + rightIdx[1] - 1;
            if(distR > distL) {
                answer += "L";
                leftIdx = [col, 1];
            }
            else if(distL > distR) {
                answer += "R"
                rightIdx = [col, 1];
            }
            else {
               if(hand === "right") {
                   answer += "R";
                   rightIdx = [col, 1];
               } else {
                   answer += "L";
                   leftIdx = [col, 1];
               }
            }
        }
    })
    return answer;
}