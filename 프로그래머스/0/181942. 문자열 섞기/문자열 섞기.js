function solution(str1, str2) {
    var answer = '';
    return str1.split("").map((el, idx) => el + str2.split("")[idx]).join("");
}