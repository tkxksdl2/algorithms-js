function solution(alp, cop, problems) {
  const p = [
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1, 1],
  ].concat(problems);
  let [maxAlp, maxCop] = [alp, cop];
  problems.forEach((item) => {
    maxAlp = Math.max(maxAlp, item[0]);
    maxCop = Math.max(maxCop, item[1]);
  });
  if (maxAlp <= alp && maxCop <= cop) return 0;
  const states = Array.from(Array(maxAlp + 1), () =>
    Array(maxCop + 1).fill(Infinity)
  );

  states[alp][cop] = 0;
  for (let a = alp; a <= maxAlp; a++) {
    for (let c = cop; c <= maxCop; c++) {
      if (a == maxAlp && c == maxCop) break;
      p.forEach((info) => {
        if (info[0] <= a && info[1] <= c) {
          const nextA = a + info[2] > maxAlp ? maxAlp : a + info[2];
          const nextC = c + info[3] > maxCop ? maxCop : c + info[3];
          states[nextA][nextC] =
            states[a][c] + info[4] < states[nextA][nextC]
              ? states[a][c] + info[4]
              : states[nextA][nextC];
        }
      });
    }
  }
  return states[maxAlp][maxCop];
}
console.log(
  solution(10, 10, [
    [10, 15, 2, 1, 2],
    [20, 20, 3, 3, 4],
  ])
);
