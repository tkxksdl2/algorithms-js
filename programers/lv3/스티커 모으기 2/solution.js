function solution(sticker) {
  if (sticker.length <= 3) return Math.max(...sticker);
  const dps = [sticker.slice(0, sticker.length - 1), sticker.slice(1)];

  for (let i = 1; i < dps[0].length; i++) {
    dps.forEach((dp) => {
      const b2 = dp[i - 2] ? dp[i - 2] : 0;
      dp[i] = Math.max(b2 + dp[i], dp[i - 1]);
    });
  }
  return dps.reduce((pre, dp) => Math.max(dp[dp.length - 1], pre), 0);
}
