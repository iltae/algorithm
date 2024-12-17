function solution(q, r, code) {
    return code.split("").filter((_, idx) => idx % q === r).join("");
}