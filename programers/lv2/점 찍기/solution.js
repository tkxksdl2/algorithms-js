// https://school.programmers.co.kr/learn/courses/30/lessons/140107
function solution(k, d) {
  let answer = 0;
  let y = Math.ceil(d / k) * k;
  for (let x = 0; x <= d; x += k) {
    while (!isInLimit(x, y, d) && y >= k) {
      y -= k;
    }
    answer += Math.floor(y / k) + 1;
  }
  return answer;
}

function isInLimit(x, y, d) {
  return Boolean(Math.sqrt(x ** 2 + y ** 2) <= d);
}
