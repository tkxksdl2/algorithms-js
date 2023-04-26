function solution(n, wires) {
  var answer = n;
  const towers = new Array(n + 1).fill(0).map(() => new Array());

  for (const [a, b] of wires) {
    towers[a].push(b);
    towers[b].push(a);
  }
  for (const [a, b] of wires) {
    answer = Math.min(answer, Math.abs(getCnt(a, [a, b]) - getCnt(b, [a, b])));
  }
  return answer;

  function getCnt(tNum, deadPoint) {
    let cnt = 1;
    const visited = new Set([tNum]);
    const queue = [tNum];
    for (let i = 0; i < queue.length; i++) {
      const curNum = queue[i];
      for (const nextNum of towers[curNum]) {
        if (
          !visited.has(nextNum) &&
          (Math.min(curNum, nextNum) !== deadPoint[0] ||
            Math.max(curNum, nextNum) !== deadPoint[1])
        ) {
          cnt++;
          visited.add(nextNum);
          queue.push(nextNum);
        }
      }
    }
    return cnt;
  }
}

function solution2(n, wires) {
  const info = new Array(n + 1)
    .fill(0)
    .map(() => ({ perents: null, childAcc: 1, link: [] }));
  for (const [s, l] of wires) {
    info[l]["link"].push(s);
    info[s]["link"].push(l);
  }
  const visited = new Set([1]);
  const depthOrder = [1];
  const queue = [1];
  for (let i = 0; i < queue.length; i++) {
    const curN = queue[i];
    for (const nextN of info[curN]["link"]) {
      if (!visited.has(nextN)) {
        queue.push(nextN);
        depthOrder.push(nextN);
        visited.add(nextN);
        info[nextN]["perents"] = curN;
      }
    }
  }
  let answer = n;
  info[1]["childAcc"] = n;
  for (let i = n - 1; i > 0; i--) {
    let child = depthOrder[i];
    if (info[child]["perents"] !== 1)
      info[info[child]["perents"]]["childAcc"] += info[child]["childAcc"];
    answer = Math.min(
      answer,
      Math.abs(info[1]["childAcc"] - 2 * info[child]["childAcc"])
    );
  }
  return answer;
}
