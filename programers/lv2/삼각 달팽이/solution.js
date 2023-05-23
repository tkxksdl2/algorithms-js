function solution(n) {
  const an = new Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .reduce((a, c) => a + c, 0);
  let answer = new Array(an).fill(null);
  answer[0] = 1;

  let [depth, idx] = [1, 0];
  let num = 2;
  while (num <= answer.length) {
    while (depth < n && !answer[idx + depth]) {
      idx += depth++;
      answer[idx] = num++;
    }
    while (idx + 1 < answer.length && !answer[idx + 1]) answer[++idx] = num++;
    while (!answer[idx - depth]) {
      idx -= depth--;
      answer[idx] = num++;
    }
  }
  return answer;
}
