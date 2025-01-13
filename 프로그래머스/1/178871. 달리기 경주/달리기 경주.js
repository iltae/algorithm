function solution(players, callings) {
    const ranking = {};

    players.forEach((player, idx) => {
        ranking[player] = idx;
    });

    callings.forEach(el => {
        const currentRank = ranking[el];
        const prevPlayer = players[currentRank - 1];

        players[currentRank] = prevPlayer;
        players[currentRank - 1] = el;

        ranking[el] = currentRank - 1;
        ranking[prevPlayer] = currentRank;
    });

    return players;
}
