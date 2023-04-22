function solution(clothes) {
  const categories = {};
  for (const [_, c] of clothes)
    categories[c] = categories[c] ? categories[c] + 1 : 1;
  const cnts = Object.values(categories);
  let sum = 0;
  for (let n = 1; n <= cnts.length; n++) {
    sum += comb(n, cnts, 0, { temp: 1, res: 0 });
  }
  return sum;
}
function comb(n, cnts, s, resObj) {
  if (n === 0) {
    resObj["res"] += resObj["temp"];
    return;
  }
  for (let i = s; i < cnts.length - n + 1; i++) {
    resObj["temp"] *= cnts[i];
    comb(n - 1, cnts, i + 1, resObj);
    resObj["temp"] /= cnts[i];
  }
  return resObj["res"];
}
