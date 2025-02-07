// 유클리드 알고리즘을 이용한 GCD 계산
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 배열의 모든 원소에 대해 GCD를 구하는 함수
function findGCD(arr) {
    return arr.reduce((acc, num) => gcd(acc, num), arr[0]);
}

// 주어진 조건을 만족하는 가장 큰 a를 구하는 함수
function solution(arrayA, arrayB) {
    // 철수와 영희의 카드에 대한 GCD 계산
    const gcdA = findGCD(arrayA);  // 철수 카드들의 GCD
    const gcdB = findGCD(arrayB);  // 영희 카드들의 GCD

    let result = 0;
    
    // 철수 카드들의 GCD가 영희 카드들을 나누지 않는지 확인
    if (arrayB.every(num => num % gcdA !== 0)) {
        result = Math.max(result, gcdA);  // 조건을 만족하면 가장 큰 값으로 업데이트
    }
    
    // 영희 카드들의 GCD가 철수 카드들을 나누지 않는지 확인
    if (arrayA.every(num => num % gcdB !== 0)) {
        result = Math.max(result, gcdB);  // 조건을 만족하면 가장 큰 값으로 업데이트
    }

    return result;  // 가장 큰 값을 반환
}
