// https://school.programmers.co.kr/learn/courses/30/lessons/138476
function solution(k, tangerine) {
  let answer = 0;
  const tangerineMap = {};
  tangerine.forEach((v, i) => {
    if (!tangerineMap[v]) tangerineMap[v] = 0;
    tangerineMap[v] += 1;
  });
  const cnts = Object.entries(tangerineMap).map(([v, cnt]) => cnt);
  cnts.sort((a, b) => b - a);
  let i = 0;
  while (k > 0 && i < cnts.length) {
    k -= cnts[i];
    i += 1;
    answer += 1;
  }
  return answer;
}
