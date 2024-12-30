function solution(numbers) {
    const template = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.forEach(el => {
        if(template.includes(el)) {
            template[template.indexOf(el)] = 0;
        }
    })
    return template.reduce((acc, cur) => acc + cur, 0);
}