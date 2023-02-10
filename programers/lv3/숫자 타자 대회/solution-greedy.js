function solution(numbers) {
  const idxes = [
    [3, 1],
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];
  function getDist(from, to) {
    if (from === to) return 1;
    const fromIdx = idxes[from];
    const toIdx = idxes[to];
    const [dy, dx] = fromIdx.map((v, i) => Math.abs(v - toIdx[i]));
    return (Math.max(dy, dx) - Math.min(dy, dx)) * 2 + Math.min(dy, dx) * 3;
  }

  let weights = new Array(10).fill(0).map(() => [Infinity, -1]);
  weights[4] = [0, 6];
  weights[6] = [0, 4];

  for (n of numbers) {
    let temp = new Array(10).fill(0).map(() => [Infinity, -1]);
    n = +n;
    for (let i = 0; i < weights.length; i++) {
      const [w, otherI] = weights[i];
      if (w !== Infinity) {
        if (i !== n) {
          temp[i] = [Math.min(temp[i][0], w + getDist(otherI, n)), n];
        }
        if (otherI !== n) {
          temp[otherI] = [Math.min(temp[otherI][0], w + getDist(i, n)), n];
        }
      }
    }
    weights = temp;
  }

  return Math.min(...weights.map((v) => v[0]));
}
