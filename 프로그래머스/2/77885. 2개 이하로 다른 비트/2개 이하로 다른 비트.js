function solution(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number + 1;
        } else {
            const binary = number.toString(2), zeroIndex = binary.lastIndexOf('0');
            if (zeroIndex === -1) {
                return parseInt('10' + binary.slice(1), 2);
            } else {
                return parseInt(binary.slice(0, zeroIndex) + '10' + binary.slice(zeroIndex + 2), 2);
            }
        }
    });
}
