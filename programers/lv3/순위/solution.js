function solution(n, results) {
  var answer = 0;
  const battle = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for ([win, lose] of results) {
    battle[win][lose] = 1;
    battle[lose][win] = -1;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (battle[i][k] === 1 && battle[k][j] === 1) battle[i][j] = 1;
        else if (battle[i][k] === -1 && battle[k][j] === -1) battle[i][j] = -1;
      }
    }
  }
  for (row of battle) {
    let cnt = 0;
    for (rate of row) {
      if (rate === 1 || rate === -1) cnt++;
    }
    if (cnt === n - 1) answer++;
  }

  return answer;
}
