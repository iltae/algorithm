function solution(my_string, queries) {
    queries.forEach(([s, e]) => {
        const temp = my_string.split("");
        my_string = [...temp.slice(0, s), ...temp.slice(s, e + 1).reverse(), ...temp.slice(e + 1)].join("")
    })
    return my_string;
}