function solution(info, edges) {
  var answer = 0;
  const links = new Array(info.length).fill(0).map(() => new Array());
  for (const [s, e] of edges) links[s].push(e);

  dfs(0);
  return answer;

  function dfs(wolfCnt) {
    const queue = [0];
    const nxtWolves = [];
    let sheepCnt = 0;
    while (queue.length > 0) {
      const ni = queue.shift();
      if (info[ni] === 1) nxtWolves.push(ni);
      else {
        if (info[ni] === 0) sheepCnt++;
        links[ni].forEach((child) => queue.push(child));
      }
    }
    answer = Math.max(sheepCnt, answer);
    for (const wolf of nxtWolves) {
      if (sheepCnt - wolfCnt <= 1) break;
      info[wolf] = 2;
      dfs(wolfCnt + 1);
      info[wolf] = 1;
    }
  }
}
