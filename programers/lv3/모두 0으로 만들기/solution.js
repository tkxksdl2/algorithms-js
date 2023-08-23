function solution(a, edges) {
  let answer = 0n;
  if (a.reduce((a, b) => a + b, 0)) return -1;
  const edgeArr = new Array(a.length).fill().map(() => []);
  edges.forEach(([s, e]) => {
    edgeArr[s].push(e);
    edgeArr[e].push(s);
  });

  const visited = new Set();
  const parents = new Array(a.length);
  const q = [0];
  let subQ = [];
  let i = -1;
  while (++i < q.length) {
    visited.add(q[i]);
    edgeArr[q[i]].forEach((e) => {
      if (!visited.has(e)) {
        subQ.push(e);
        parents[e] = q[i];
        q.push(e);
      }
    });
  }
  while (q.length) {
    const node = q.pop();
    a[parents[node]] += a[node];
    answer += BigInt(Math.abs(a[node]));
    a[node] = 0;
  }
  return answer;
}
