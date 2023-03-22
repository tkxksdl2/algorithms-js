function solution(beginning, target) {
  let cnt = -1;
  const n = beginning.length + beginning[0].length;
  const rc = new Array(n).fill(0).map((_, i) => i + 1);
  const flag = new Array(n).fill(false);
  while (++cnt <= n) {
    const orders = comb(rc, cnt, 0, [], []);
    for (order of orders) {
      let isValid = true;
      for (i of order) {
        flag[i - 1] = true;
      }
      for (let y = 0; y < target.length; y++) {
        for (let x = 0; x < target[0].length; x++) {
          const v =
            beginning[y][x] +
            (flag[y] ? 1 : 0) +
            (flag[x + target.length] ? 1 : 0);
          if (v % 2 !== target[y][x] % 2) isValid = false;
        }
      }
      if (isValid) return cnt;
      flag.fill(false);
    }
  }
  return -1;
}

function comb(array, n, s, res, ret) {
  if (n === 0) {
    ret.push(res.slice());
    return [[]];
  }
  let i = 0;
  while (s + i < array.length) {
    res.push(array[s + i]);
    i++;
    comb(array, n - 1, s + i, res, ret);
    res.pop();
  }

  return ret;
}
