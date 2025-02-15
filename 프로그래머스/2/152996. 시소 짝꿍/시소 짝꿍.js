function solution(weights) {
  weights.sort((a, b) => b - a);

  const dict = {};
  
  let cnt = 0;

  for (let i = 0; i < weights.length; i++) {
      const w = weights[i];

      if (dict[w]) {
          cnt += dict[w];
      }

      if (dict[(w * 4) / 3]) {
          cnt += dict[(w * 4) / 3];
      }

      if (dict[(w * 3) / 2]) {
          cnt += dict[(w * 3) / 2];
      }

      if (dict[w * 2]) {
          cnt += dict[w * 2];
      }

      dict[w] = (dict[w] || 0) + 1;
  }
    
    console.log(dict);

    return cnt;
}
