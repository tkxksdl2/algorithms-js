function solution(words) {
  var answer = 0;
  const t = { cnt: 0 };
  words.map((w) => {
    let temp = t;
    w.split("").map((c) => {
      if (!temp[c]) temp[c] = { cnt: 0 };
      temp[c]["cnt"]++;
      temp = temp[c];
    });
  });

  return dfs(t);

  function dfs(t) {
    let cnt = t["cnt"];
    if (cnt === 1) return cnt;

    Object.entries(t).map(([k, child]) => {
      if (k !== "cnt") cnt += dfs(child);
    });
    return cnt;
  }
}
