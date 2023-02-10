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

  let weights = new Array(10).fill(0).map(() => new Array(10).fill(Infinity));
  weights[4][6] = 0;
  weights[6][4] = 0;

  for (n of numbers) {
    let temp = new Array(10).fill(0).map(() => new Array(10).fill(Infinity));

    for (let i = 0; i < weights.length; i++) {
      for (let j = 0; j < weights[0].length; j++) {
        const w = weights[i][j];
        if (w !== Infinity) {
          if (i === +n || j === +n) {
            temp[i][j] = Math.min(w + 1, temp[i][j]);
            temp[j][i] = Math.min(w + 1, temp[j][i]);
            break;
          } else {
            const newDistI = w + getDist(i, +n);
            const newDistJ = w + getDist(j, +n);
            temp[+n][j] = Math.min(newDistI, temp[+n][j]);
            temp[j][+n] = Math.min(newDistI, temp[j][+n]);
            temp[+n][i] = Math.min(newDistJ, temp[+n][i]);
            temp[i][+n] = Math.min(newDistJ, temp[i][+n]);
          }
        }
      }
    }
    weights = temp;
    console.log(n);
    weights.forEach((row) => {
      row.forEach((v) => {
        if (v === Infinity) v = "I";
        process.stdout.write(v + " ");
      });
      process.stdout.write("\n");
    });
  }
  console.log(weights[6][6]);
  return Math.min(...weights.flat(1));
}
console.log(solution("151506"));
