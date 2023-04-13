function solution(clockHands) {
  let minCnt = Infinity;
  for (let i = 0; i < 4 ** clockHands.length; i++) {
    const bit = i.toString(4);
    const firstRowBit =
      bit.length < clockHands.length
        ? "0".repeat(clockHands.length - bit.length) + bit
        : bit;
    const clockCopy = clockHands.map((row) => [...row]);
    let cnt = 0;
    for (let j = 0; j < firstRowBit.length; j++) {
      let shouldTurnN = +firstRowBit[j];
      while (shouldTurnN--) {
        turn(0, j, clockCopy);
        cnt++;
      }
    }
    for (let y = 1; y < clockCopy.length; y++) {
      for (let x = 0; x < clockCopy.length; x++) {
        let shouldTurnN = (4 - clockCopy[y - 1][x]) % 4;
        while (shouldTurnN--) {
          turn(y, x, clockCopy);
          cnt++;
        }
      }
    }
    const sum = clockCopy[clockCopy.length - 1].reduce((sum, v) => sum + v, 0);
    if (sum === 0 && cnt < minCnt) minCnt = cnt;
  }
  return minCnt;
}
function turn(y, x, clockHands) {
  const dy = [0, -1, 1, 0, 0];
  const dx = [0, 0, 0, -1, 1];
  for (let i = 0; i < 5; i++) {
    const [ny, nx] = [y + dy[i], x + dx[i]];
    if (
      ny >= 0 &&
      nx >= 0 &&
      ny < clockHands.length &&
      nx < clockHands.length
    ) {
      clockHands[ny][nx] = (clockHands[ny][nx] + 1) % 4;
    }
  }
}
