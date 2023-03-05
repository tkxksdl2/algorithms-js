// https://school.programmers.co.kr/learn/courses/30/lessons/159993

function solution(maps) {
  let start, lever, end;
  for (let y = 0; y < maps.length; y++) {
    for (let x = 0; x < maps[0].length; x++) {
      if (maps[y][x] === "S") start = [y, x];
      else if (maps[y][x] === "L") lever = [y, x];
      else if (maps[y][x] === "E") end = [y, x];
    }
  }
  const toL = bfs(start, lever, maps);
  const toE = bfs(lever, end, maps);
  return toL !== -1 && toE !== -1 ? toL + toE : -1;
}

function bfs(start, end, maps) {
  const deq = [[...start, 0]];
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const visited = new Array(maps.length)
    .fill(0)
    .map(() => new Array(maps[0].length).fill(false));
  visited[start[0]][start[1]] = true;
  while (deq.length) {
    const [y, x, cnt] = deq.shift();
    if (y === end[0] && x === end[1]) return cnt;
    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];
      if (
        ny >= 0 &&
        ny < maps.length &&
        nx >= 0 &&
        nx < maps[0].length &&
        !visited[ny][nx] &&
        maps[ny][nx] !== "X"
      ) {
        deq.push([ny, nx, cnt + 1]);
        visited[ny][nx] = true;
      }
    }
  }
  return -1;
}
