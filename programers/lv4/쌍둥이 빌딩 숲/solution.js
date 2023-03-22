function solution(n, count) {
  const r = 1000000007;
  const dpMap = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  dpMap[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= count; j++) {
      dpMap[i][j] = (dpMap[i - 1][j - 1] + dpMap[i - 1][j] * (i - 1) * 2) % r;
    }
  }
  return dpMap[n][count] % r;
}
