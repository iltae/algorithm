function solution(myString) {
    return myString.split("").map((el) => el.codePointAt(0) < "l".codePointAt(0) ? "l" : el).join("");
}