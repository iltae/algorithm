const solution = (picks, minerals) => {
  let answer = 0, formatted = [];
  const obj = [
      { "diamond": 1, "iron": 1, "stone": 1 },
      { "diamond": 5, "iron": 1, "stone": 1 },
      { "diamond": 25, "iron": 5, "stone": 1 },
  ];
    
  const check = (array, word) => {
      return array.filter((e) => e === word).length;
  }
    
  minerals = minerals.slice(0, picks.reduce((acc, cur) => acc + cur, 0) * 5);
    
  for (let i = 0; i < minerals.length; i += 5) {
      formatted.push(minerals.slice(i, i + 5));
  }
    
  formatted.sort((a, b) => {
      return (check(b, "diamond") - check(a, "diamond")) || (check(b, "iron") - check(a, "iron"));
  })
    
  let idx = picks[0] ? 0 : (picks[1] ? 1 : 2);
    
  formatted.forEach(e => {
      answer += e.reduce((acc, cur) => acc + obj[idx][cur], 0);
      picks[idx]--
      if (picks[idx] === 0) idx++;
  })
    
  return answer;
}