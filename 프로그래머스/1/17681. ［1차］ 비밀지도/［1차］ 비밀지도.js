function map(arr, n) {
    const map = Array.from({ length: n }, (_, idx) => {
        return arr[idx].toString(2).padStart(n, "0").split("").map((bit) => bit === "1" ? "#" : " ").join("");
    });
    return map;
}

function solution(n, arr1, arr2) {
    const map1 = map(arr1, n), map2 = map(arr2, n);
    return map1.map((el, idx1) => el.split("").map((el, idx2) => el === "#" || map2[idx1][idx2] === "#" ? "#" : " ").join(""));
}