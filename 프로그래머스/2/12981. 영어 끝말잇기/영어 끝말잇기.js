function solution(n, words) {
    const usedWords = new Set();
    usedWords.add(words[0]);

    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];
        const prevWord = words[i - 1];

        if (prevWord[prevWord.length - 1] !== currentWord[0] || usedWords.has(currentWord)) {
            const playerNum = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            
            return [playerNum, turn];
        }

        usedWords.add(currentWord);
    }

    return [0, 0];
}