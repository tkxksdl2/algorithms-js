//조합
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

// 비중복 순열
function permutation(numbers, s, n, returnArray, usedIndex) {
  if (n === 0) {
    returnArray.push(+s);
    return;
  }
  for (let i = 0; i < numbers.length; i++) {
    if (!usedIndex.has(i)) {
      s += numbers[i];
      usedIndex.add(i);
      permutation(numbers, s, n - 1, returnArray, usedIndex);
      s = s.slice(0, s.length - 1);
      usedIndex.delete(i);
    }
  }
  return returnArray;
}

console.log(permutation("02324", "", 3, [], new Set()));
