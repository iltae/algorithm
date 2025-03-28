function solution(n, info) {
  let answer = [-1];
  let maxDiff = 0;

  function dfs(idx, arrows, ryan) {
    if (idx === 11) {
      if (arrows > 0) {
        ryan[10] += arrows;
      }
        
      let scoreRyan = 0, scoreApeach = 0;
        
      for (let i = 0; i < 11; i++) {
        if (ryan[i] > info[i]) {
          scoreRyan += (10 - i);
        } else if (info[i] > 0) {
          scoreApeach += (10 - i);
        }
      }
        
      const diff = scoreRyan - scoreApeach;
        
      if (diff > 0) {
        if (diff > maxDiff) {
          maxDiff = diff;
          answer = [...ryan];
        } 
        else if (diff === maxDiff) {
          for (let i = 10; i >= 0; i--) {
            if (ryan[i] > answer[i]) {
              answer = [...ryan];
              break;
            } else if (ryan[i] < answer[i]) {
              break;
            }
          }
        }
      }
        
      if (arrows > 0) {
        ryan[10] -= arrows;
      }
        
      return;
    }

    dfs(idx + 1, arrows, ryan);

    const need = info[idx] + 1;
      
    if (arrows >= need) {
      ryan[idx] = need;
      dfs(idx + 1, arrows - need, ryan);
      ryan[idx] = 0;
    }
  }

  dfs(0, n, new Array(11).fill(0));
    
  return answer;
}
