function solution(msg) {
    const answer = [], dictionary = {};
    let index = 1;

    for (let i = 0; i < 26; i++) {
        dictionary[String.fromCharCode(65 + i)] = index++;
    }

    let i = 0;
    
    while (i < msg.length) {
        let w = msg[i];
        let j = i + 1;

        while (j < msg.length && dictionary[w + msg[j]] !== undefined) {
            w += msg[j];
            j++;
        }
        
        answer.push(dictionary[w]);

        if (j < msg.length) {
            dictionary[w + msg[j]] = index++;
        }

        i = j;
    }

    return answer;
}
