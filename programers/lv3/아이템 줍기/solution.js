function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = Infinity;
  const lines = new Array(51)
    .fill(0)
    .map(() => new Array(51).fill(0).map(() => new Array()));
  for (let k = 0; k < rectangle.length; k++) {
    const [x1, y1, x2, y2] = rectangle[k];
    for (let i = 1; x1 + i <= x2; i++) {
      getOutline(y1, x1 + i, y1, x1 + i - 1, k);
      getOutline(y2, x1 + i, y2, x1 + i - 1, k);
    }
    for (let i = 1; y1 + i <= y2; i++) {
      getOutline(y1 + i, x1, y1 + i - 1, x1, k);
      getOutline(y1 + i, x2, y1 + i - 1, x2, k);
    }
  }
  let visited = new Set(["" + characterY + characterX]);
  getCnt(characterY, characterX, 0, itemY, itemX);
  return answer;

  function getOutline(y1, x1, y2, x2, selfI) {
    let isValid = true;
    for (let i = 0; i < rectangle.length; i++) {
      if (i === selfI) continue;
      isValid = isValid && !isIn(y1, x1, y2, x2, rectangle[i]);
    }
    if (isValid) {
      lines[y1][x1].push([y2, x2]);
      lines[y2][x2].push([y1, x1]);
    }
  }

  function isIn(y1, x1, y2, x2, rec) {
    const [rx1, ry1, rx2, ry2] = rec;
    return (
      ry1 <= y1 &&
      y1 <= ry2 &&
      ry1 <= y2 &&
      y2 <= ry2 &&
      rx1 <= x1 &&
      x1 <= rx2 &&
      rx1 <= x2 &&
      x2 <= rx2
    );
  }

  function getCnt(y, x, cnt, itemY, itemX) {
    if (y === itemY && x === itemX) {
      answer = Math.min(answer, cnt);
      return;
    }
    for (const [nextY, nextX] of lines[y][x]) {
      const key = "" + nextY + nextX;
      if (!visited.has(key)) {
        visited.add(key);
        getCnt(nextY, nextX, cnt + 1, itemY, itemX);
        visited.delete(key);
      }
    }
  }
}
