function solution(board) {
  var answer =
    board[0].reduce((a, c) => a | c) | board.reduce((a, c) => a[0] | c[0]);

  for (let y = 1; y < board.length; y++) {
    for (let x = 1; x < board[0].length; x++) {
      if (board[y][x]) {
        const area =
          Math.min(board[y - 1][x - 1], board[y - 1][x], board[y][x - 1]) + 1;
        board[y][x] = area;
        answer = Math.max(answer, area);
      }
    }
  }

  return answer ** 2;
}
