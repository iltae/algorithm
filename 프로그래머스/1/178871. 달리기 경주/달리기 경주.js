function solution(players, callings) {
    const indexMap = new Map();
    
    players.forEach((player, index) => {
        indexMap.set(player, index);
    });

    for (const calling of callings) {
        const playerIdx = indexMap.get(calling);
        const frontPlayer = players[playerIdx - 1];
        
        players[playerIdx] = frontPlayer;
        players[playerIdx - 1] = calling;
        
        indexMap.set(calling, playerIdx - 1);
        indexMap.set(frontPlayer, playerIdx);
    }

    return players;
}