function solution(n, l, r) {
  const allLen = 5 ** n;
  if (l > r) return 0;
  if (n === 0) return 1;

  let points = [];
  for (let i = 1; i <= 4; i++) {
    points.push(parseInt((allLen * i) / 5 + 1));
  }
  return (
    solution(n - 1, getLeft(1, points[0], l), getRight(1, points[0], r)) +
    solution(
      n - 1,
      getLeft(points[0], points[1], l),
      getRight(points[0], points[1], r)
    ) +
    solution(
      n - 1,
      getLeft(points[2], points[3], l),
      getRight(points[2], points[3], r)
    ) +
    solution(
      n - 1,
      getLeft(points[3], allLen + 1, l),
      getRight(points[3], allLen + 1, r)
    )
  );
}
function getLeft(l, r, p) {
  if (p < l) return 1;
  else if (p >= r) return r - l + 1;
  else return p - l + 1;
}
function getRight(l, r, p) {
  if (p < l) return 0;
  else if (p >= r) return r - l;
  else return p - l + 1;
}

console.log(solution(2, 4, 17));
