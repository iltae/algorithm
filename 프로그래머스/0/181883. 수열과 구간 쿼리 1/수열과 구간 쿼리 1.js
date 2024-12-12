function solution(arr, queries) {
    queries.forEach(([start, end]) => {
        arr.forEach((el, idx) => {
            if (idx >= start && idx <= end) {
                arr[idx] = el + 1;
            }
        });
    });
    return arr;
}
