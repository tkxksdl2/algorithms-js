function solution(n, cores) {
  let [s, e] = [1, 10000 * 50000];
  n -= cores.length;
  while (s < e) {
    const m = Math.ceil((s + e) / 2);
    let done = cores.reduce((pre, v) => pre + Math.floor(m / v), 0);
    if (done < n) s = m;
    else e = m - 1;
  }
  let leftJob = n - cores.reduce((pre, v) => pre + Math.floor(e / v), 0);
  for (let i = 0; i < cores.length; i++) {
    if (cores[i] - (e % cores[i]) === 1) leftJob--;
    if (!leftJob) return i + 1;
  }
}
