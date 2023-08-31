function solution(n, works) {
  works.sort((a, b) => b - a);
  let i = 0;
  let midCnt = 0;
  let maxVal = works[0];

  while (n > 0 && maxVal > 0) {
    while (i + 1 < works.length && works[i + 1] === maxVal) i++;

    const nextVal = i + 1 < works.length ? works[i + 1] : 0;
    if (n > (i + 1) * (maxVal - nextVal)) {
      n -= (i + 1) * (maxVal - nextVal);
      maxVal = nextVal;
    } else {
      midCnt = n % (i + 1);
      maxVal -= Math.floor(n / (i + 1));
      n = 0;
    }
  }
  return works.reduce(
    (pre, cur, idx) =>
      idx <= i
        ? midCnt-- > 0
          ? pre + (maxVal - 1) ** 2
          : pre + maxVal ** 2
        : pre + cur ** 2,
    0
  );
}
