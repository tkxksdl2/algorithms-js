function solution(n, times) {
  let [s, e] = [1, times.reduce((pre, v) => Math.max(pre, v), 0) * n];

  while (e > s) {
    const m = Math.floor((s + e) / 2);
    let remain = n;
    times.forEach((t) => {
      remain -= Math.floor(m / t);
    });
    if (remain > 0) s = m + 1;
    else e = m;
  }
  return e;
}
