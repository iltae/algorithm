function solution(n, k) {
    const answer = [];
    const nums = Array.from({ length: n }, (_, idx) => idx + 1);
    k--;

    function factorial(num) {
        if (num === 0 || num === 1) return 1;
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    while (n > 0) {
        const fact = factorial(n - 1);
        const index = Math.floor(k / fact);
        answer.push(nums[index]);
        nums.splice(index, 1);
        k %= fact;
        n--;
    }

    return answer;
}
