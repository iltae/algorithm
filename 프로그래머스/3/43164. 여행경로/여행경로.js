function solution(tickets) {
    let answer = [];
    const visited = new Array(tickets.length).fill(false);
    
    tickets.sort();

    function dfs(currentAirport, path) {
        if (answer.length > 0) return;

        if (path.length === tickets.length + 1) {
            answer = [...path];
            return;
        }
        
        for (let i = 0; i < tickets.length; i++) {
            if (!visited[i] && tickets[i][0] === currentAirport) {
                visited[i] = true;
                path.push(tickets[i][1]);
                
                dfs(tickets[i][1], path);
                
                if (answer.length === 0) {
                    visited[i] = false;
                    path.pop();
                }
            }
        }
    }
    
    dfs("ICN", ["ICN"]);
    
    return answer;
}