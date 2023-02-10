function comb(array, n, s, res, ret) {
  if (n === 0) {
    ret.push(res.slice());
    return;
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

console.log(comb([3, 2, 5, 4, 6, 6], 3, 0, [], []));
