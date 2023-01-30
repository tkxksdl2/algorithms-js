// https://school.programmers.co.kr/learn/courses/30/lessons/154540#

function solution(maps) {
  const answer = [];
  const visited = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(false)
  );
  for (let y = 0; y < maps.length; y++) {
    for (let x = 0; x < maps[0].length; x++) {
      const islSum = getSum(y, x);
      islSum > 0 && answer.push(islSum);
    }
  }
  function getSum(y, x) {
    if (
      y < 0 ||
      x < 0 ||
      y >= maps.length ||
      x >= maps[0].length ||
      visited[y][x]
    )
      return 0;
    visited[y][x] = true;
    if (maps[y][x] == "X") return 0;
    return (
      +maps[y][x] +
      getSum(y - 1, x) +
      getSum(y + 1, x) +
      getSum(y, x - 1) +
      getSum(y, x + 1)
    );
  }
  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}
