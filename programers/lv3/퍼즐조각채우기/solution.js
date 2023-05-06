function solution(game_board, table) {
  var answer = 0;
  const blank = [];
  const block = [];
  const blankVisited = new Set();
  const blockVisited = new Set();
  for (let i = 0; i < game_board.length; i++) {
    for (let j = 0; j < game_board[0].length; j++) {
      if (game_board[i][j] === 0 && !blankVisited.has(i + "-" + j)) {
        blank.push(getPiece(i, j, game_board, blankVisited, 0));
      }
      if (table[i][j] === 1 && !blockVisited.has(i + "-" + j)) {
        block.push(getPiece(i, j, table, blockVisited, 1));
      }
    }
  }
  const usedPiece = new Set();
  const filled = new Set();
  for (let i = 0; i < blank.length; i++) {
    const targetBlank = blank[i];
    for (let j = 0; j < block.length; j++) {
      if (usedPiece.has(j)) continue;
      if (filled.has(i)) break;

      let piece = block[j];
      let turnCnt = 0;
      while (turnCnt++ < 4) {
        piece = turn(piece);
        if (
          piece.length !== targetBlank.length ||
          piece[0].length !== targetBlank[0].length
        )
          continue;
        let tempCnt = 0;
        let isValid = true;
        for (let y = 0; y < piece.length; y++) {
          for (let x = 0; x < piece[0].length; x++) {
            if (piece[y][x] !== targetBlank[y][x]) {
              if (piece[y][x]) tempCnt++;
            } else isValid = false;
          }
        }
        if (isValid) {
          answer += tempCnt;
          usedPiece.add(j);
          filled.add(i);
          break;
        }
      }
    }
  }
  return answer;

  function turn(piece) {
    let newPiece = new Array(piece[0].length)
      .fill(0)
      .map(() => new Array(piece.length));
    for (let y = 0; y < piece.length; y++) {
      for (let x = 0; x < piece[0].length; x++) {
        newPiece[piece[0].length - 1 - x][y] = piece[y][x];
      }
    }
    return newPiece;
  }

  function getPiece(y, x, targetTable, targetVisited, type) {
    // type=== 0 or 1
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    const queue = [[y, x]];
    targetVisited.add(y + "-" + x);
    const valueIndexes = [];
    let [t, d, l, r] = [y, y, x, x];
    for (let i = 0; i < queue.length; i++) {
      const [y, x] = queue[i];
      valueIndexes.push([y, x]);
      for (let di = 0; di < 4; di++) {
        const [ny, nx] = [y + dy[di], x + dx[di]];
        if (
          ny >= 0 &&
          ny < targetTable.length &&
          nx >= 0 &&
          nx < targetTable[0].length &&
          !targetVisited.has(ny + "-" + nx) &&
          targetTable[ny][nx] === type
        ) {
          targetVisited.add(ny + "-" + nx);
          queue.push([ny, nx]);
          t = Math.min(t, ny);
          d = Math.max(d, ny);
          l = Math.min(l, nx);
          r = Math.max(r, nx);
        }
      }
    }
    const arr = new Array(d - t + 1)
      .fill(0)
      .map(() => new Array(r - l + 1).fill(+!type));
    for ([y, x] of valueIndexes) {
      arr[y - t][x - l] = type;
    }
    return arr;
  }
}
