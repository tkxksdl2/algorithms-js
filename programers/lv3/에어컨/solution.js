function solution(temperature, t1, t2, a, b, onboard) {
  const dp = new Array(onboard.length)
    .fill(0)
    .map(() => new Array(51).fill(Infinity));
  dp[0][temperature + 10] = 0;

  for (let time = 1; time < dp.length; time++) {
    for (let temp = 0; temp <= 50; temp++) {
      if (onboard[time] && (temp < t1 + 10 || temp > t2 + 10)) continue;

      for (let bt = temp - 1; bt <= temp + 1; bt++) {
        if (bt < 0 || bt > 50 || dp[time - 1][bt] === Infinity) continue;

        let cost;
        if (bt === temp) {
          cost =
            temp === temperature + 10 ? dp[time - 1][bt] : dp[time - 1][bt] + b;
        } else {
          const isSystemOn = (bt - temp) * (bt - temperature - 10) <= 0;
          cost = isSystemOn ? dp[time - 1][bt] + a : dp[time - 1][bt];
        }
        dp[time][temp] = Math.min(dp[time][temp], cost);
      }
    }
  }
  return Math.min(...dp[dp.length - 1]);
}
