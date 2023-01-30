function solution(weights) {
  weights.sort((a, b) => a - b);
  let cnt = 0;
  const toqs = {};
  const ratios = [1, 1 / 2, 2 / 3, 3 / 4];
  for (w of weights) {
    for (r of ratios) {
      if (toqs[w * r]) cnt += toqs[w * r];
    }

    if (toqs[w]) toqs[w] += 1;
    else toqs[w] = 1;
  }
  return cnt;
}
