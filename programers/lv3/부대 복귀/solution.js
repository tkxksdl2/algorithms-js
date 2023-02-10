function solution(n, roads, sources, destination) {
  let answer = [];
  const distMap = {};
  for ([a, b] of roads) {
    !distMap[a] ? (distMap[a] = { [b]: 1 }) : (distMap[a][b] = 1);
    !distMap[b] ? (distMap[b] = { [a]: 1 }) : (distMap[b][a] = 1);
  }
  const ansMap = {};
  let visited = new Set([destination]);
  const deq = [[destination, 0]];
  while (deq.length) {
    const [s, d] = deq.shift();
    for ([e, dd] of Object.entries(distMap[s])) {
      if ((ansMap[e] && ansMap[e] < d + dd) || visited.has(+e)) continue;
      ansMap[e] = d + dd;
      visited.add(+e);
      deq.push([e, d + dd]);
    }
  }
  for (s of sources) {
    if (ansMap[s]) answer.push(ansMap[s]);
    else if (s === destination) answer.push(0);
    else answer.push(-1);
  }
  return answer;
}
