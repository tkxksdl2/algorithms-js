function solution(n, stations, w) {
  var answer = 0;
  let blankStart = 1;
  const stationRange = 2 * w + 1;
  for (const i of stations) {
    if (blankStart > n) break;
    const [blockStart, blockEnd] = [i - w, i + w];
    answer += Math.ceil((blockStart - blankStart) / stationRange);
    blankStart = blockEnd + 1;
  }
  answer += Math.ceil((n + 1 - blankStart) / stationRange);

  return answer;
}
