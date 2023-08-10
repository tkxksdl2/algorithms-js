function solution(grid, d, k) {
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const div = BigInt(10 ** 9 + 7);
  const [n, m] = [grid.length, grid[0].length];
  // find first cycle mapper
  const mappers = grid.map((row) =>
    new Array(row.length).fill(0).map(() => new Array())
  );
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      let mapper = grid.map((row) => new Array(row.length).fill(0n));
      mapper[y][x] = 1n;

      for (const slope of d) {
        const newMapper = grid.map((row) => new Array(row.length).fill(0n));
        for (let cy = 0; cy < n; cy++) {
          for (let cx = 0; cx < m; cx++) {
            for (let di = 0; di < 4; di++) {
              const [ny, nx] = [cy + dy[di], cx + dx[di]];
              if (
                ny >= 0 &&
                ny < n &&
                nx >= 0 &&
                nx < m &&
                grid[ny][nx] - grid[cy][cx] === slope
              )
                newMapper[ny][nx] = (newMapper[ny][nx] + mapper[cy][cx]) % div;
            }
          }
        }
        mapper = newMapper;
      }
      mappers[y][x].push(mapper);
    }
  }

  let mapIdx = 0;
  while (2 ** ++mapIdx <= k) {
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < m; x++) {
        const midState = mappers[y][x][mapIdx - 1];
        mappers[y][x].push(mapping(midState, mapIdx - 1));
      }
    }
  }

  mapIdx = mappers[0][0].length - 1;
  let state = grid.map((row) => new Array(row.length).fill(1n));
  while (k > 0) {
    while (2 ** mapIdx > k) mapIdx--;
    state = mapping(state, mapIdx);
    k -= 2 ** mapIdx;
  }
  return Number(
    state.reduce((pre, cur) => pre + cur.reduce((a, b) => a + b, 0n), 0n) % div
  );

  function mapping(state, mapperIdx) {
    const retState = state.map((row) => new Array(row.length).fill(0n));
    for (let sy = 0; sy < n; sy++) {
      for (let sx = 0; sx < m; sx++) {
        const stateVal = state[sy][sx];
        if (!stateVal) continue;
        const mapper = mappers[sy][sx][mapperIdx];
        for (let ey = 0; ey < n; ey++) {
          for (let ex = 0; ex < m; ex++) {
            const mapperVal = mapper[ey][ex];
            retState[ey][ex] = (retState[ey][ex] + stateVal * mapperVal) % div;
          }
        }
      }
    }
    return retState;
  }
}
