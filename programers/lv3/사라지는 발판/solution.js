const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

function solution(board, aloc, bloc) {
  return dfs(board, aloc, bloc, 0)[1];
}

function dfs(board, aloc, bloc, cnt) {
  const [y, x] = aloc;
  if (board[y][x] === 0) return [false, cnt];

  const bRes = [];
  board[y][x] = 0;
  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];
    if (
      ny >= 0 &&
      ny < board.length &&
      nx >= 0 &&
      nx < board[0].length &&
      board[ny][nx] !== 0
    ) {
      aloc[0] = ny;
      aloc[1] = nx;
      bRes.push(dfs(board, bloc, aloc, cnt + 1));
      aloc[0] = y;
      aloc[1] = x;
    }
  }
  board[y][x] = 1;

  // bRes가 전부 true 라면 a의 패배
  // 아니라면 패배를 확정짓지 못함.
  if (bRes.length === 0) return [false, cnt];

  let allLose = true;
  let max = 0;
  let min = Infinity;
  for (const [bWin, c] of bRes) {
    if (!bWin) {
      allLose = false;
      min = Math.min(min, c);
    } else max = Math.max(max, c);
  }

  if (allLose) return [false, max];
  else return [true, min];
}
