function solution(target) {
  const dp = new Array(Math.max(target + 1, 61))
    .fill(0)
    .map(() => Array.from([Infinity, 0]));
  dp[50] = [1, 1];
  for (let i = 1; i <= 20; i++) {
    dp[i] = [1, 1];
    for (let mul = 2; mul <= 3; mul++) {
      dp[i * mul] = [1, 0];
    }
  }
  for (let i = 20; i < dp.length; i++) {
    for (let j = Math.max(1, i - 60); j <= i; j++) {
      const next = dp[i].map((v, index) => v + dp[j][index]);
      if (
        dp[i + j] &&
        (next[0] < dp[i + j][0] ||
          (next[0] === dp[i + j][0] && next[1] > dp[i + j][1]))
      ) {
        dp[i + j] = next;
      }
    }
  }
  return dp[target];
}

solution(100);
