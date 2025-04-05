function solution(polynomial) {
    let x = 0, cons = 0;

    polynomial.split(" + ").forEach(term => {
        if (term.includes("x")) {
            x += (term === "x" ? 1 : parseInt(term));
        } else {
            cons += parseInt(term);
        }
    });

    if (x === 0 && cons === 0) return "0";
    let result = x === 0 ? "" : (x === 1 ? "x" : `${x}x`);
    if (cons !== 0) result += (x !== 0 ? " + " : "") + cons;

    return result;
}