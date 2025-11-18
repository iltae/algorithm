function solution(numbers) {
    const strNumbers = numbers.map(String);
    
    strNumbers.sort((a, b) => (b + a) - (a + b));

    const answer = strNumbers.join('');

    if (answer[0] === '0') return '0';

    return answer;
}