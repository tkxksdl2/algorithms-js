function solution(targets) {
  var answer = 0;
  targets = targets.sort((a, b) => a[1] - b[1]);
  let rangeE = 0;
  for ([s, e] of targets) {
    if (s >= rangeE) {
      answer++;
      rangeE = e;
    }
  }
  return answer;
}
