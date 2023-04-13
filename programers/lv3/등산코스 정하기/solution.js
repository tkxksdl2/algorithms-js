function solution(n, paths, gates, summits) {
  var answer = [Infinity, Infinity];
  gates = new Set(gates);
  summits = new Set(summits);
  const pathObj = {};
  for (let i = 0; i <= n; i++) pathObj[i] = {};
  for ([s, e, w] of paths) {
    let [sToE, eToS] = [true, true];
    if (gates.has(s)) eToS = false;
    if (gates.has(e)) sToE = false;
    if (summits.has(s)) sToE = false;
    if (summits.has(e)) eToS = false;

    if (sToE) pathObj[s][e] = +w;
    if (eToS) pathObj[e][s] = +w;
  }
  const minIntensity = new Array(n + 1).fill(Infinity);
  const queue = [];
  for (i of gates) {
    minIntensity[i] = 0;
    queue.push([i, 0]);
  }

  for (qIndex = 0; qIndex < queue.length; qIndex++) {
    const [nodeI, weight] = queue[qIndex];
    for (let [destination, curWeight] of Object.entries(pathObj[nodeI])) {
      if (weight > curWeight) curWeight = weight;
      if (curWeight < minIntensity[+destination]) {
        minIntensity[+destination] = curWeight;
        if (
          summits.has(+destination) &&
          (curWeight < answer[1] ||
            (curWeight === answer[1] && +destination < answer[0]))
        ) {
          answer = [+destination, curWeight];
        } else queue.push([+destination, curWeight]);
      }
    }
  }
  return answer;
}
