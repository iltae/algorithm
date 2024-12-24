function solution(arr, query) {
    query.forEach((el, idx) => {
        if(idx % 2 === 0) {
            arr = arr.slice(0, el + 1);
        } else {
            arr = arr.slice(el);
        }
    })
    return arr;
}