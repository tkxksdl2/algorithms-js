function solution(n, edge) {
  let answer = [0, 0]; // dist, count
  const edgeMap = new Array(n + 1).fill(0).map(() => []);
  for (let [s, e] of edge) {
    edgeMap[s].push(e);
    edgeMap[e].push(s);
  }
  const distance = new Array(n + 1).fill(Infinity);
  distance[1] = 0;
  const queue = [[1, 0]];
  for (let i = 0; i < queue.length; i++) {
    const [nodeI, curDist] = queue[i];
    const nextDist = curDist + 1;
    for (nextI of edgeMap[nodeI]) {
      if (distance[nextI] > nextDist) {
        distance[nextI] = nextDist;
        queue.push([nextI, nextDist]);
        if (answer[0] < nextDist) answer = [nextDist, 1];
        else if (answer[0] === nextDist) answer[1]++;
      }
    }
  }
  return answer[1];
}
