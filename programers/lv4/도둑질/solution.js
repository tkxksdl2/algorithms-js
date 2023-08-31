function solution(money) {
  if (money.length <= 3) return Math.max(...money);
  const dps = [new Array(money.length - 1), new Array(money.length - 1)];
  dps[0][0] = money[0];
  dps[1][0] = money[1];
  for (let i = 0; i < money.length - 1; i++) {
    dps.forEach((dp, j) => {
      const b2 = dp[i - 2] ? dp[i - 2] : 0;
      const b1 = dp[i - 1] ? dp[i - 1] : 0;
      dp[i] = Math.max(b2 + money[i + j], b1);
    });
  }
  return dps.reduce((pre, dp) => Math.max(pre, dp[dp.length - 1]), 0);
}
