function solution(quiz) {
    return quiz.map(el => {
        const [num1, operator, num2, _, result] = el.split(" ");

        if ((operator === "+" && parseInt(num1) + parseInt(num2) === parseInt(result)) || 
            (operator === "-" && parseInt(num1) - parseInt(num2) === parseInt(result))) {
            return "O";
        } else {
            return "X";
        }
    });
}
