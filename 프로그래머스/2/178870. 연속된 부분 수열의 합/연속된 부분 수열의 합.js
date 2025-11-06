function solution(sequence, k) {
    let left = 0;
    let currentSum = 0;
    let minLength = Infinity;
    let answer = [];

    for (let right = 0; right < sequence.length; right++) {
        currentSum += sequence[right];
        
        while (currentSum > k && left <= right) {
            currentSum -= sequence[left];
            left++;
        }
        
        if (currentSum === k) {
            const currentLength = right - left + 1;

            if (currentLength < minLength) {
                minLength = currentLength;
                answer = [left, right];
            }
        }
    }

    return answer;
}