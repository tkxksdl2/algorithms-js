function dijkstra(data, nodeN, start) {
  const costMap = new Array(nodeN)
    .fill(0)
    .map(() => new Array(nodeN).fill(Infinity));
  for (const [s, e, c] of data) {
    costMap[s][e] = c;
    costMap[e][s] = c;
  }
  for (let i = 0; i < nodeN; i++) costMap[i][i] = 0;

  const visited = new Array(nodeN).fill(false);

  const queue = [start];
  for (let i = 0; i < queue.length; i++) {
    const curNode = queue[i];
    visited[curNode] = true;
    costMap[curNode].forEach((v, nextNode) => {
      costMap[start][nextNode] = Math.min(
        costMap[start][nextNode],
        costMap[start][curNode] + v
      );
    });
    let [minV, next] = [Infinity, -1];
    costMap[start].forEach((v, i) => {
      if (v < minV && !visited[i]) {
        minV = v;
        next = i;
      }
    });
    if (next > 0) queue.push(next);
  }

  return costMap[start];
}

const data = [
  [0, 1, 5],
  [0, 2, 3],
  [0, 3, 7],
  [1, 2, 4],
  [2, 3, 3],
  [1, 4, 7],
  [2, 4, 8],
  [3, 4, 4],
];
const nodeN = 5;
console.log(dijkstra(data, nodeN, 0));

function bellmanFord(data, nodeN, start) {
  const dist = new Array(nodeN).fill(Infinity);
  dist[start - 1] = 0;

  while (--nodeN >= 0) {
    for (const [s, e, cost] of data) {
      if (dist[s - 1] !== Infinity && dist[e - 1] > dist[s - 1] + cost) {
        if (nodeN === 0) return -1;
        dist[e - 1] = dist[s - 1] + cost;
      }
    }
  }
  return dist;
}

// 단방향 간선
const data2 = [
  [1, 2, 6],
  [1, 3, 2],
  [2, 3, 2],
  [2, 4, 2],
  [3, 5, 1],
  [5, 2, -4],
  [5, 4, 3],
  [4, 6, 2],
  [5, 6, 2],
];
const nodeN2 = 6;
console.log(bellmanFord(data2, nodeN2, 1));

function floydWarshall(data, nodeN) {
  const costMap = new Array(nodeN)
    .fill(0)
    .map(() => new Array(nodeN).fill(Infinity));
  for (const [s, e, c] of data) {
    costMap[s][e] = c;
    costMap[e][s] = c;
  }
  for (let i = 0; i < nodeN; i++) costMap[i][i] = 0;

  for (let k = 0; k < nodeN; k++) {
    for (let i = 0; i < nodeN; i++) {
      for (let j = 0; j < nodeN; j++) {
        costMap[i][j] = Math.min(costMap[i][j], costMap[i][k] + costMap[k][j]);
      }
    }
  }

  return costMap;
}

console.log(floydWarshall(data, nodeN));
