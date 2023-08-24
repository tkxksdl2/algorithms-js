function solution(board, r, c) {
  var answer = Infinity;
  const cards = new Array(7).fill().map(() => []);
  const used = new Array(7).fill(false);
  let objectCnt = 0;
  board.forEach((row, r) => {
    row.forEach((card, c) => {
      if (card > 0) {
        cards[card].push([r, c]);
        objectCnt++;
      }
    });
  });
  combDfs(r, c, 0, 0);
  return answer + objectCnt;

  function combDfs(cy, cx, level, cnt) {
    if (cnt >= answer) return;
    if (level >= 6) {
      answer = Math.min(answer, cnt);
      return;
    }

    for (let i = 1; i <= 6; i++) {
      if (used[i]) continue;

      used[i] = true;
      const cardCouple = cards[i];
      if (cardCouple.length === 0) {
        combDfs(cy, cx, level + 1, cnt);
      } else {
        const [ey1, ex1] = cardCouple[0];
        const [ey2, ex2] = cardCouple[1];
        const cnt1 =
          getMoveCnt(cy, cx, ey1, ex1) + getMoveCnt(ey1, ex1, ey2, ex2);
        const cnt2 =
          getMoveCnt(cy, cx, ey2, ex2) + getMoveCnt(ey2, ex2, ey1, ex1);
        board[ey1][ex1] = 0;
        board[ey2][ex2] = 0;
        combDfs(ey2, ex2, level + 1, cnt + cnt1);
        combDfs(ey1, ex1, level + 1, cnt + cnt2);
        board[ey1][ex1] = i;
        board[ey2][ex2] = i;
      }
      used[i] = false;
    }
  }

  function getMoveCnt(sy, sx, ey, ex) {
    let minCnt = 6;
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    const visited = new Array(4).fill().map(() => new Array(4).fill(false));
    moveDfs(sy, sx, 0, 0, -1);

    return minCnt;

    function moveDfs(cy, cx, cnt, tempCnt, preD) {
      if (cnt >= minCnt) return;
      if (cy === ey && cx === ex) {
        minCnt = Math.min(cnt, minCnt);
        return;
      }
      visited[cy][cx] = true;
      for (let d = 0; d < 4; d++) {
        const [ny, nx] = [cy + dy[d], cx + dx[d]];
        if (ny >= 0 && ny <= 3 && nx >= 0 && nx <= 3 && !visited[ny][nx]) {
          let nextCnt = cnt;
          let nextTemp = tempCnt;
          if (d !== preD) {
            nextCnt = cnt + 1 + nextTemp;
            nextTemp = 0;
          } else {
            nextTemp++;
            if (board[ny][nx] !== 0 || hasMoveToWall(d, ny, nx)) nextTemp = 0;
          }
          if (board[ny][nx] !== 0) moveDfs(ny, nx, nextCnt, nextTemp, -1);
          else moveDfs(ny, nx, nextCnt, nextTemp, d);
        }
      }
      visited[cy][cx] = false;
    }
  }
  function hasMoveToWall(d, ny, nx) {
    if (d === 0 || d === 1) return ny === 0 || ny === 3;
    else return nx === 0 || nx === 3;
  }
}
