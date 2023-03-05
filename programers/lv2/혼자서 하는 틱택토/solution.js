function solution(board) {
  let [oCnt, xCnt] = [0, 0];
  for (row of board) {
    for (s of row) {
      if (s === "O") oCnt++;
      if (s === "X") xCnt++;
    }
  }
  const oWinCnt = getWinCnt("O", board);
  const xWinCnt = getWinCnt("X", board);
  if (
    (oWinCnt && !xWinCnt && oCnt - 1 === xCnt) ||
    (xWinCnt && !oWinCnt && oCnt === xCnt) ||
    (oWinCnt + xWinCnt === 0 && oCnt - xCnt >= 0 && oCnt - xCnt <= 1)
  )
    return 1;
  return 0;
}
function getWinCnt(s, board) {
  let cnt = 0;
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === s && board[i][1] === s && board[i][2] === s) cnt++;
    if (board[0][i] === s && board[1][i] === s && board[2][i] === s) cnt++;
  }
  if (board[0][0] === s && board[1][1] === s && board[2][2] === s) cnt++;
  if (board[0][2] === s && board[1][1] === s && board[2][0] === s) cnt++;
  return cnt;
}
