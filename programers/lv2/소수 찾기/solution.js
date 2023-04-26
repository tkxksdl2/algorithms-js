function solution(numbers) {
  const primeNums = new Set();
  for (let n = 1; n <= numbers.length; n++) {
    const nums = makeNum(numbers, "", n, [], new Set());
    nums.forEach((num) => {
      if (!primeNums.has(num) && isPrime(num)) {
        primeNums.add(num);
      }
    });
  }
  return primeNums.size;
}
function makeNum(numbers, s, n, returnArray, usedIndex) {
  if (n === 0) {
    returnArray.push(+s);
    return;
  }
  for (let i = 0; i < numbers.length; i++) {
    if (!usedIndex.has(i)) {
      s += numbers[i];
      usedIndex.add(i);
      makeNum(numbers, s, n - 1, returnArray, usedIndex);
      s = s.slice(0, s.length - 1);
      usedIndex.delete(i);
    }
  }
  return returnArray;
}
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
