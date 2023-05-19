function solution(rows, columns, queries) {
  var answer = [];
  const table = new Array(rows)
    .fill(0)
    .map((_, y) =>
      new Array(columns).fill(0).map((_, x) => y * columns + x + 1)
    );
  queries.forEach((query) => {
    const [y1, x1, y2, x2] = query.map((v) => v - 1);
    let minVal = 100 ** 2;
    let temp;
    let [lt, rt, ld, rd] = [
      table[y1][x1],
      table[y1][x2],
      table[y2][x1],
      table[y2][x2],
    ];
    for (let i = 1; i <= x2 - x1; i++) {
      minVal = Math.min(minVal, lt, rd);
      temp = table[y1][x1 + i];
      table[y1][x1 + i] = lt;
      lt = temp;

      temp = table[y2][x2 - i];
      table[y2][x2 - i] = rd;
      rd = temp;
    }

    for (let i = 1; i <= y2 - y1; i++) {
      minVal = Math.min(minVal, rt, ld);
      temp = table[y1 + i][x2];
      table[y1 + i][x2] = rt;
      rt = temp;

      temp = table[y2 - i][x1];
      table[y2 - i][x1] = ld;
      ld = temp;
    }
    answer.push(minVal);
  });
  return answer;
}
