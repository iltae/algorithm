function solution(participant, completion) {
    let list = {};

    for (let name of participant) {
        list[name] = (list[name] || 0) + 1;
    }

    for (let name of completion) {
        list[name]--;
    }

    for (let name in list) {
        if (list[name] === 1) {
            return name;
        }
    }
}
