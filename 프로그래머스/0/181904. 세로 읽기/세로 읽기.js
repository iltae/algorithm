function solution(my_string, m, c) {
    var answer = '';
    return my_string.split("").filter((_, idx) => idx % m === c - 1 ).join("");
}