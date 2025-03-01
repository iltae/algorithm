function solution(s) {
    const n = s.length;
    let answer = n;

    for (let len = 1; len <= n / 2; len++) {
        let compressed = '', count = 1;
        
        for (let i = 0; i < n; i += len) {
            const current = s.slice(i, i + len);
            const next = s.slice(i + len, i + 2 * len);
            
            if (current === next) {
                count++;
            } else {
                if (count > 1) {
                    compressed += count + current;
                } else {
                    compressed += current;
                }
                count = 1;
            }
        }
        
        answer = Math.min(answer, compressed.length);
    }

    return answer;
}
