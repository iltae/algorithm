function solution(numbers) {
    const primeSet = new Set();
    const numArr = numbers.split("");

    function getPermutation(currentNumStr, remainingArr) {
        if (currentNumStr.length > 0) {
            const num = Number(currentNumStr);
            if (isPrime(num)) primeSet.add(num);
        }

        for (let i = 0; i < remainingArr.length; i++) {
            const newNumStr = currentNumStr + remainingArr[i];
            const newRemainingArr = [...remainingArr];
            newRemainingArr.splice(i, 1);
        
            getPermutation(newNumStr, newRemainingArr);
        }
    }

    getPermutation("", numArr);

    return primeSet.size;
}

function isPrime(num) {
    if (num <= 1) return false;
    
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}