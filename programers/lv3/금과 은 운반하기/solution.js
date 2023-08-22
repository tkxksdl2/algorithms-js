function solution(a, b, g, s, w, t) {
  const sortedT = t.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
  if (isPossibleTime(0)) return 0;
  let [l, r] = [0, 1];
  while (!isPossibleTime(r)) {
    l = r;
    r *= 2;
  }
  while (r >= l) {
    const m = Math.ceil((r + l) / 2);
    if (isPossibleTime(m)) r = m - 1;
    else l = m + 1;
  }

  return l;

  function isPossibleTime(time) {
    let [ca, cb, cAmt] = [0, 0, 0];
    let i = -1;
    while (++i < t.length) {
      const [bt, tIdx] = sortedT[i];
      if (bt > time) break;
      const deliverCnt = 1 + Math.floor((time - bt) / (2 * bt));
      const [cg, cs, cw] = [g[tIdx], s[tIdx], w[tIdx]];
      let deliverAmt = Math.min(cg + cs, deliverCnt * cw);

      cAmt += Math.min(cg + cs, deliverAmt);
      ca += Math.min(cg, deliverAmt);
      cb += Math.min(cs, deliverAmt);
      if (cAmt >= a + b && ca >= a && cb >= b) return true;
    }
    return false;
  }
}
