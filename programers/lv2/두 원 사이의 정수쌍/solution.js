function solution(r1, r2) {
  let r2Sum = 0;
  let r1Sum = 0;
  for (let a = 0; a <= r2; a++) {
    const b = Math.sqrt(r2 ** 2 - a ** 2);
    r2Sum += Math.floor(b);

    if (a <= r1) {
      const r2B = Math.sqrt(r1 ** 2 - a ** 2);
      if (r2B > 0 && r2B % 1 === 0) r1Sum += r2B - 1;
      else r1Sum += Math.floor(r2B);
    }
  }
  return r2Sum * 4 - r1Sum * 4;
}
