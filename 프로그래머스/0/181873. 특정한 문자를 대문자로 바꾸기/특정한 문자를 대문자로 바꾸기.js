function solution(my_string, alp) {
    return my_string.split("").map(((el) => el === alp ? el.toUpperCase() : el)).join("");
}

// replaceAll 메서드 사용
// 해당 문자열의 첫번째 인자 문자를, 두번째 인자로 변경
// 대응되는 첫번째 인자가 없다면 원문자열 반환
// function solution(my_string, alp) {
//     return my_string.replaceAll(alp, alp.toUpperCase())
// }
