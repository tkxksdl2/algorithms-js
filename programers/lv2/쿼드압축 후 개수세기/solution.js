function solution(arr) {
  function divide(y1, x1, y2, x2) {
    if (y2 - y1 === 1) return arr[y1][x1] ? [0, 1] : [1, 0];
    const res = [0, 0];
    divide(y1, x1, (y1 + y2) / 2, (x1 + x2) / 2).map((v, i) => {
      res[i] += v;
    });
    divide(y1, (x1 + x2) / 2, (y1 + y2) / 2, x2).map((v, i) => {
      res[i] += v;
    });
    divide((y1 + y2) / 2, x1, y2, (x1 + x2) / 2).map((v, i) => {
      res[i] += v;
    });
    divide((y1 + y2) / 2, (x1 + x2) / 2, y2, x2).map((v, i) => {
      res[i] += v;
    });

    if (res[0] === 0) return [0, 1];
    else if (res[1] === 0) return [1, 0];
    return res;
  }

  return divide(0, 0, arr.length, arr.length);
}
