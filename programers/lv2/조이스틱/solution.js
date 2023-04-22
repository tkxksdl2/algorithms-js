function solution(name) {
  const costs = name
    .split("")
    .map((_, i) =>
      Math.min(name.charCodeAt(i) - 65, 90 - name.charCodeAt(i) + 1)
    );
  const costSum = costs.reduce((acc, cur) => acc + cur);
  let move = costs.length - 1;

  for (let i = 0; i < costs.length; i++) {
    if (costs[i] === 0) {
      // 연속되는 0 구역을 제외한 시작값과 끝값
      let [s, e] = [i, i];
      let [si, ei] = [1, 1];
      while (
        ei < costs.length &&
        costs[e - ei < 0 ? costs.length - ei + e : e - ei] === 0
      )
        ei++;
      while (si < costs.length && costs[(s + si) % costs.length] === 0) si++;
      e = e - ei < 0 ? costs.length - ei + e : e - ei;
      s = (s + si) % costs.length;

      if (s <= e) {
        move = Math.min(move, e, costs.length - s);
      } else {
        move = Math.min(
          move,
          costs.length - s + e + Math.min(costs.length - s, e)
        );
      }
    }
  }
  return costSum + move;
}
