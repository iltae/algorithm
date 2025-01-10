function solution(babbling) {
    const canSay = ["aya", "ye", "woo", "ma"];
    let answer = 0;

    babbling.forEach(word => {
        let prev = "";
        let valid = true;

        while (word.length > 0) {
            let matched = false;

            for (let el of canSay) {
                if (word.startsWith(el) && prev !== el) {
                    word = word.replace(el, "");
                    prev = el;
                    matched = true;
                    break;
                }
            }

            if (!matched) {
                valid = false;
                break;
            }
        }

        if (valid) {
            answer++;
        }
    });

    return answer;
}
