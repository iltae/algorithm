function solution(tickets) {
    const answer = [], graph = {};
    
    for (let [from, to] of tickets) {
        graph[from] = graph[from] || [];
        graph[from].push(to);
    }

    for (let key in graph) {
        graph[key].sort();
    }

    function dfs(current) {
        while (graph[current] && graph[current].length > 0) {
            const next = graph[current].shift();
            dfs(next);
        }
        answer.push(current);
    }

    dfs("ICN");

    return answer.reverse();
}
