function solution(n, money) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (const m of money) {
    for (let i = m; i < dp.length; i++) {
      dp[i] += dp[i - m];
      dp[i] %= 1000000007;
    }
  }
  return dp[n];
}
