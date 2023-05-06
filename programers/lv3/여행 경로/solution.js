function solution(tickets) {
  const lines = {};
  const lineCnt = {};
  tickets.sort((a, b) => (a[1] > b[1] ? 1 : -1));
  for (const [from, to] of tickets) {
    if (!lines[from]) lines[from] = [to];
    if (!lines[to]) lines[to] = [];
    lines[from].push(to);
    lineCnt[from + to] = lineCnt[from + to] ? lineCnt[from + to] + 1 : 1;
  }

  let answer;
  dfs("ICN", ["ICN"], 0);
  return answer;

  function dfs(from, returnArr, cnt) {
    if (cnt === tickets.length) {
      answer = [...returnArr];
      return;
    }
    for (const to of lines[from]) {
      if (lineCnt[from + to] > 0 && !answer) {
        lineCnt[from + to]--;
        returnArr.push(to);
        dfs(to, returnArr, cnt + 1);
        returnArr.pop();
        lineCnt[from + to]++;
      }
    }
  }
}
