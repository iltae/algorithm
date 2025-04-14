function solution(babbling) {
    const canSay = ["aya", "ye", "woo", "ma"];
    let count = 0;

    for (let word of babbling) {
        let temp = word;

        for (let say of canSay) {
            if (temp.includes(say.repeat(2))) {
                temp = "invalid";
                break;
            }
            temp = temp.replace(say, " ");
        }

        if (temp.replaceAll(" ", "") === "") {
            count++;
        }
    }

    return count;
}
