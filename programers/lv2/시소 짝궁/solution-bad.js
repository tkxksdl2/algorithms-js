function solution(weights) {
  let answer = 0;
  const toq = {};

  weights.sort((a, b) => a - b);
  let pre = -1;
  let sameCnts = [];

  for (let i = 0; i < weights.length; i++) {
    if (weights[i] !== pre) sameCnts.push(1);
    else sameCnts[sameCnts.length - 1] += 1;
    pre = weights[i];
    for (q of [weights[i] * 2, weights[i] * 3, weights[i] * 4]) {
      if (!toq[q]) toq[q] = 1;
      else toq[q] += 1;
    }
  }
  for (let key in toq) {
    const cnt = toq[key];
    answer += combCnt(cnt, 2);
  }
  for (let cnt of sameCnts) {
    if (cnt > 1) answer -= combCnt(cnt, 2) * 2;
  }
  return answer;
}

function combCnt(n, r) {
  let numer = n;
  for (let i = n - 1; i > n - r; i--) numer *= i;
  let deno = 1;
  for (let i = 2; i <= r; i++) deno *= i;
  return numer / deno;
}
