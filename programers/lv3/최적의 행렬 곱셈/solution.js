function solution(matrix_sizes) {
  const dp = new Array(matrix_sizes.length + 1)
    .fill()
    .map(() => new Array(matrix_sizes.length).fill(Infinity));
  dp[1] = dp[1].map(() => 0);

  for (let tSize = 2; tSize <= matrix_sizes.length; tSize++) {
    for (let i = 0; i <= matrix_sizes.length - tSize; i++) {
      for (let m = 1; m < tSize; m++) {
        dp[tSize][i] = Math.min(
          dp[tSize][i],
          dp[m][i] +
            dp[tSize - m][i + m] +
            matrix_sizes[i][0] *
              matrix_sizes[i + m - 1][1] *
              matrix_sizes[i + tSize - 1][1]
        );
      }
    }
  }
  return dp[matrix_sizes.length][0];
}
