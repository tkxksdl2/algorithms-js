function solution(board) {
  const N = board.length;
  var answer = 0;
  const blocks = new Array(201);
  const visited = new Array(N).fill().map(() => new Array(N).fill(false));
  board.forEach((row, y) => {
    row.forEach((v, x) => {
      if (visited[y][x]) return;
      if (v > 0) blocks[v] = findBlock(y, x, v);
      visited[y][x] = true;
    });
  });

  let flag = true;
  while (flag) {
    flag = false;
    blocks.forEach((points, num) => {
      if (!points) return;
      const [y1, x1, y2, x2] = points;

      const blanks = [];
      for (let i = y1; i <= y2; i++) {
        for (let j = x1; j <= x2; j++) {
          if (board[i][j] === 0) blanks.push([i, j]);
        }
      }

      if (
        blanks.length !== 2 ||
        !isShootable(blanks[0]) ||
        !isShootable(blanks[1])
      )
        return;

      for (let i = y1; i <= y2; i++) {
        for (let j = x1; j <= x2; j++) {
          board[i][j] = 0;
        }
      }
      answer++;
      blocks[num] = null;
      flag = true;
    });
  }
  return answer;

  function findBlock(y, x, num) {
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    const q = [[y, x]];
    let y1 = y,
      y2 = y,
      x1 = x,
      x2 = x;
    while (q.length > 0) {
      const [cy, cx] = q.shift();

      y1 = Math.min(y1, cy);
      y2 = Math.max(y2, cy);
      x1 = Math.min(x1, cx);
      x2 = Math.max(x2, cx);
      for (let d = 0; d < 4; d++) {
        const [ny, nx] = [cy + dy[d], cx + dx[d]];
        if (
          ny >= 0 &&
          nx >= 0 &&
          ny < N &&
          nx < N &&
          board[ny][nx] === num &&
          !visited[ny][nx]
        ) {
          visited[ny][nx] = true;
          q.push([ny, nx]);
        }
      }
    }
    return [y1, x1, y2, x2];
  }

  function isShootable(point) {
    const [y, x] = point;
    for (let dy = 0; dy <= y; dy++) {
      if (board[dy][x] > 0) return false;
    }
    return true;
  }
}
