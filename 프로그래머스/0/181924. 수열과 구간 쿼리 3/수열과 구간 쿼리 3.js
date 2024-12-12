function solution(arr, queries) {
    queries.forEach(([start, end]) => {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    })
    return arr;
}