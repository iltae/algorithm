function solution(s, n) {
    return s.split("").map(el => {
        if (el === " ") {
            return " ";
        } else if (el >= 'A' && el <= 'Z') {
            let change = el.charCodeAt() + n;
            if (change > 90) {
                change -= 26;
            }
            return String.fromCharCode(change);
        } else if (el >= 'a' && el <= 'z') {
            let change = el.charCodeAt() + n;
            if (change > 122) {
                change -= 26;
            }
            return String.fromCharCode(change);
        }
    }).join("");
}
