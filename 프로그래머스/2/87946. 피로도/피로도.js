function solution(k, dungeons) {
    let answer = 0, now = k;
    const visited = Array(dungeons.length).fill(false);
    
    function dfs (now, count) {

        answer = Math.max(answer, count);

        for(let i = 0; i < dungeons.length; i++) {
            if(!visited[i] && dungeons[i][0] <= now) {
                visited[i] = true;
                dfs(now - dungeons[i][1], count + 1);
                visited[i] = false;
            }
        }
    }
    
    dfs(now, 0)
    
    return answer;
}