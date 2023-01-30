// https://school.programmers.co.kr/learn/courses/30/lessons/154538

function solution(x, y, n) {
  const dist = new Array(y + 1).fill(Infinity);
  dist[x] = 0;
  const arr = [x];
  while (arr.length) {
    const v = arr.shift();
    const d = dist[v];
    const nexts = [v + n, v * 2, v * 3];
    for (next of nexts) {
      if (next === y) return d + 1;
      if (next <= y && d + 1 < dist[next]) {
        arr.push(next);
        dist[next] = d + 1;
      }
    }
  }
  return dist[y] === Infinity ? -1 : dist[y];
}

console.log(solution(10, 40, 5));
