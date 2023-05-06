function solution(maps) {
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const visited = new Array(maps.length)
    .fill(0)
    .map(() => new Array(maps[0].length).fill(false));
  visited[0][0] = true;
  const queue = [[0, 0, 1]];
  let idx = 0;
  while (idx < queue.length) {
    const [y, x, cnt] = queue[idx++];
    if (y === maps.length - 1 && x === maps[0].length - 1) return cnt;
    for (let i = 0; i < 4; i++) {
      let [nextY, nextX] = [y + dy[i], x + dx[i]];
      if (
        nextY >= 0 &&
        nextX >= 0 &&
        nextY < maps.length &&
        nextX < maps[0].length &&
        !visited[nextY][nextX] &&
        maps[nextY][nextX]
      ) {
        visited[nextY][nextX] = true;
        queue.push([nextY, nextX, cnt + 1]);
      }
    }
  }
  return -1;
}
