function solution(s) {
    return arr = s.split(" ").map(el => el.charAt(0).toUpperCase() + el.substring(1).toLowerCase()).join(" ");
}