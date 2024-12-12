function solution(my_string, indices) {
    return my_string.split("").filter((el, idx) => !indices.includes(idx)).join("");
}