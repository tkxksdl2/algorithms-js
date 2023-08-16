function solution(n, m, y, x, queries) {
  const dy = [0, 0, -1, 1];
  const dx = [-1, 1, 0, 0];
  let squareStart = [0, 0];
  let squareEnd = [n - 1, m - 1];
  let tdlr = [1, 1, 1, 1];

  for (let [di, value] of queries) {
    squareStart[0] += dy[di] * value;
    squareStart[1] += dx[di] * value;
    squareEnd[0] += dy[di] * value;
    squareEnd[1] += dx[di] * value;
    // 사각형이 완전히 범위를 떠나는 경우
    if (squareStart[0] >= n - 1 || squareEnd[0] <= 0) {
      squareStart[0] = adjustY(squareStart[0]);
      squareEnd[0] = adjustY(squareEnd[0]);
      tdlr[0] = n;
      tdlr[1] = n;
    }
    if (squareStart[1] >= m - 1 || squareEnd[1] <= 0) {
      squareStart[1] = adjustX(squareStart[1]);
      squareEnd[1] = adjustX(squareEnd[1]);
      tdlr[2] = m;
      tdlr[3] = m;
    }

    //사각형이 일부만 범위를 떠나는 경우
    if (squareStart[0] < 0) {
      tdlr[0] += squareStart[0] * -1;
      squareStart[0] = adjustY(squareStart[0]);
    } else if (squareStart[1] < 0) {
      tdlr[2] += squareStart[1] * -1;
      squareStart[1] = adjustX(squareStart[1]);
    } else if (squareEnd[0] >= n) {
      tdlr[1] += squareEnd[0] - n + 1;
      squareEnd[0] = adjustY(squareEnd[0]);
    } else if (squareEnd[1] >= m) {
      tdlr[3] += squareEnd[1] - m + 1;
      squareEnd[1] = adjustX(squareEnd[1]);
    }
  }

  if (
    y < squareStart[0] ||
    y > squareEnd[0] ||
    x < squareStart[1] ||
    x > squareEnd[1]
  ) {
    return 0;
  } else if (y === squareStart[0]) {
    if (x === squareStart[1]) return BigInt(tdlr[0]) * BigInt(tdlr[2]);
    else if (x === squareEnd[1]) return BigInt(tdlr[0]) * BigInt(tdlr[3]);
    return tdlr[0];
  } else if (y === squareEnd[0]) {
    if (x === squareStart[1]) return BigInt(tdlr[1]) * BigInt(tdlr[2]);
    else if (x === squareEnd[1]) return BigInt(tdlr[1]) * BigInt(tdlr[3]);
    return tdlr[1];
  } else if (x === squareStart[1]) {
    return tdlr[2];
  } else if (x === squareEnd[1]) {
    return tdlr[3];
  }

  return 1;

  function adjustY(y) {
    return Math.max(Math.min(y, n - 1), 0);
  }
  function adjustX(x) {
    return Math.max(Math.min(x, m - 1), 0);
  }
}
