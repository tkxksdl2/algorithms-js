// https://school.programmers.co.kr/learn/courses/30/lessons/131704/solution_groups?language=javascript&type=my
function solution(order) {
  let answer = 0;
  let i = 1;
  const stack = [];
  for (next of order) {
    while (i < next) {
      stack.push(i);
      i++;
    }
    if (i === next) {
      answer++;
      i++;
    } else if (stack[stack.length - 1] === next) {
      answer++;
      stack.pop();
    } else break;
  }
  return answer;
}
