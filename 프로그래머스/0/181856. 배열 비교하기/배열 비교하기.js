function solution(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr2.length;
    if(len1 === len2) {
        const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
        const sum2 = arr2.reduce((acc, cur) => acc + cur, 0)
        return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1
    } else {
        return len1 > len2 ? 1 : -1
    }
}