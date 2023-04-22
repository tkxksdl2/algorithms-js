function solution(clothes) {
  const categories = {};
  for (const [_, c] of clothes)
    categories[c] = categories[c] ? categories[c] + 1 : 1;
  const cnts = Object.values(categories);
  return cnts.reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
