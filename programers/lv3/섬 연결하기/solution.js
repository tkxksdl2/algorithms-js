function solution(n, costs) {
  var answer = 0;
  const distMap = new Array(n).fill(0).map(() => new Array(n).fill(Infinity));
  for ([s, e, c] of costs) {
    distMap[s][e] = c;
    distMap[e][s] = c;
  }
  let connected = new Set([0]);
  while (connected.size < n) {
    let [target, cost] = [-1, Infinity];
    for (const c of connected) {
      for (let e = 0; e < n; e++) {
        if (!connected.has(e) && distMap[c][e] < cost) {
          target = e;
          cost = distMap[c][e];
        }
      }
    }
    connected.add(target);
    answer += cost;
  }

  return answer;
}

/// 크루스칼

function solution_K(n, costs) {
  var answer = 0;
  costs.sort((a, b) => a[2] - b[2]);
  const parents = new Array(n).fill(0).map((_, i) => i);
  for (const [p1, p2, cost] of costs) {
    const a = find(parents, p1);
    const b = find(parents, p2);
    if (a === b) continue;

    if (a > b) parents[a] = p2;
    else parents[b] = p1;
    answer += cost;
  }
  return answer;
}

function find(parents, p) {
  if (parents[p] === p) return p;
  return find(parents, parents[p]);
}
