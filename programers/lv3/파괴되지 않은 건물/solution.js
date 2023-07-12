function solution(board, skill) {
  var answer = 0;
  const cache = new Array(board.length)
    .fill(0)
    .map(() => new Array(board[0].length).fill(0));

  for (const s of skill) work(...s);

  cache.forEach((row, r1) => {
    row.forEach((c, c1) => {
      if (r1 + 1 < cache.length) cache[r1 + 1][c1] += c;
    });
  });
  cache.forEach((row, r1) => {
    row.forEach((c, c1) => {
      if (c1 + 1 < cache[0].length) cache[r1][c1 + 1] += c;
      board[r1][c1] += c;
    });
  });

  board.forEach((row) => {
    row.forEach((v) => {
      if (v > 0) answer++;
    });
  });
  return answer;

  function work(type, r1, c1, r2, c2, degree) {
    degree = type === 1 ? -degree : degree;
    cache[r1][c1] += degree;
    if (r2 + 1 < board.length) cache[r2 + 1][c1] -= degree;
    if (c2 + 1 < board[0].length) cache[r1][c2 + 1] -= degree;
    if (r2 + 1 < board.length && c2 + 1 < board[0].length)
      cache[r2 + 1][c2 + 1] += degree;
  }
}
