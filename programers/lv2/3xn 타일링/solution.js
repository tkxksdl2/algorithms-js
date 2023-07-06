function solution(n) {
  const dp = new Array(n + 1).fill(0);
  dp[2] = 3;
  const acc = new Array(n + 1).fill(0);
  if (acc.length > 2) acc[2] = dp[2];

  for (let i = 4; i < dp.length; i++) {
    if (i % 2 === 0) dp[i] = 2;

    dp[i] += dp[i - 2] * 3;
    if (i >= 4) dp[i] += acc[i - 4] * 2;
    dp[i] %= 1000000007;

    acc[i] = acc[i - 2] + dp[i];
  }

  return dp[n];
}
