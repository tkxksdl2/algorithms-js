function solution(scores) {
  if (scores.length === 1) return 1;
  const target = scores.shift();
  scores.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));

  let answer = 1;
  let maxComVal = 0;
  for (let i = 0; i < scores.length; i++) {
    if (target[0] < scores[i][0] && target[1] < scores[i][1]) return -1;
    if (maxComVal <= scores[i][1]) {
      if (target[0] + target[1] < scores[i][0] + scores[i][1]) {
        answer++;
      }
      maxComVal = scores[i][1];
    }
  }
  return answer;
}
