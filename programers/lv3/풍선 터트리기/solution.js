function solution(a) {
  var answer = 0;
  const lAcc = new Array(a.length);
  const rAcc = new Array(a.length);
  lAcc[0] = a[0];
  rAcc[rAcc.length - 1] = a[a.length - 1];

  for (let i = 1; i < a.length; i++) {
    lAcc[i] = Math.min(lAcc[i - 1], a[i]);
    rAcc[rAcc.length - 1 - i] = Math.min(
      rAcc[rAcc.length - i],
      a[a.length - 1 - i]
    );
  }
  a.forEach((v, i) => {
    if (i === 0 || i === a.length - 1 || lAcc[i - 1] > v || rAcc[i + 1] > v)
      answer++;
  });
  return answer;
}
