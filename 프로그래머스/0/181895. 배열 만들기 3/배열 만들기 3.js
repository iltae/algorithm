function solution(arr, intervals) {
    const [[start1, end1], [start2, end2]] = intervals;
    return [...arr.slice(start1, end1 + 1), ...arr.slice(start2, end2 + 1)];
}