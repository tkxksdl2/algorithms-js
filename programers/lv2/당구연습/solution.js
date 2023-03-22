function solution(m, n, startX, startY, balls) {
  let answer = [];
  for ([x, y] of balls) {
    const temp = [];
    if (x !== startX || startY < y)
      temp.push(Math.abs(startX - x) ** 2 + (startY + y) ** 2);
    if (x !== startX || y < startY)
      temp.push(Math.abs(startX - x) ** 2 + (n * 2 - startY - y) ** 2);
    if (y !== startY || startX < x)
      temp.push(Math.abs(startY - y) ** 2 + (startX + x) ** 2);
    if (y !== startY || x < startX)
      temp.push(Math.abs(startY - y) ** 2 + (m * 2 - startX - x) ** 2);

    answer.push(Math.min(...temp));
  }
  return answer;
}
