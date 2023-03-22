function solution(board) {
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const accMap = new Array(board.length)
    .fill(0)
    .map(() => new Array(board[0].length).fill(Infinity));
  const queue = [];
  let [gy, gx] = [0, 0];
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (board[y][x] === "R") {
        accMap[y][x] = 0;
        queue.push([y, x, 0]);
      }
      if (board[y][x] === "G") {
        gy = y;
        gx = x;
      }
    }
  }
  let i = 0;
  while (i < queue.length) {
    for (let d = 0; d < 4; d++) {
      let [y, x, cnt] = queue[i];
      let [nextY, nextX] = [y + dy[d], x + dx[d]];
      while (
        nextY >= 0 &&
        nextX >= 0 &&
        nextY < board.length &&
        nextX < board[0].length &&
        board[nextY][nextX] !== "D"
      ) {
        y = nextY;
        x = nextX;
        nextY = y + dy[d];
        nextX = x + dx[d];
      }
      if (cnt + 1 < accMap[y][x]) {
        accMap[y][x] = cnt + 1;
        if (board[y][x] !== "G") queue.push([y, x, cnt + 1]);
      }
    }
    i++;
  }
  return accMap[gy][gx] !== Infinity ? accMap[gy][gx] : -1;
}
