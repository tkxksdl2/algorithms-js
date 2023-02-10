// https://school.programmers.co.kr/learn/courses/30/lessons/147354

function solution(data, col, row_begin, row_end) {
  let answer = 0;
  data.sort((a, b) =>
    a[col - 1] === b[col - 1] ? b[0] - a[0] : a[col - 1] - b[col - 1]
  );
  for (let i = row_begin; i <= row_end; i++) {
    let sum = 0;
    for (d of data[i - 1]) sum += d % i;
    answer = answer ^ sum;
  }
  return answer;
}
