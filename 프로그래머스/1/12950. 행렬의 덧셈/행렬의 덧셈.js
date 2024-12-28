function solution(arr1, arr2) {
    return arr1.map((el, idx1) => el.map((el, idx2) => el + arr2[idx1][idx2]));
}