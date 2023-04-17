function solution(n) {
  const dp = new Array(n + 1).fill(2);
  const accMap = new Array(n + 1).fill(0);
  accMap[1] = 1;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;
  for (let i = 6; i < dp.length; i += 3) dp[i] = 4;

  const elementMap = dp.slice(0, 7);
  for (let i = 2; i < dp.length; i++) {
    dp[i] += dp[i - 1];
    if (i > 2) dp[i] += dp[i - 2] * elementMap[2];
    if (i > 3) dp[i] += dp[i - 3] * elementMap[3];
    if (i > 4) {
      dp[i] += accMap[i - 4] * elementMap[4];
    }
    if (i > 5) {
      dp[i] += accMap[i - 5] * elementMap[5];
    }
    if (i > 6) {
      dp[i] += accMap[i - 6] * elementMap[6];
    }
    dp[i] = dp[i] % 1000000007;
    accMap[i] += dp[i] + (i - 3 > 0 ? accMap[i - 3] : 0);
  }
  return dp[n];
}
