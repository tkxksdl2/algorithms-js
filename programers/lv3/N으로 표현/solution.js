function solution(N, number) {
  if (N === number) return 1;
  const map = {};
  for (let i = 1; i <= 8; i++) map[i] = new Set([+String(N).repeat(i)]);
  for (let cnt = 2; cnt <= 8; cnt++) {
    for (i = 1; i < cnt; i++) {
      const setA = map[i];
      const setB = map[cnt - i];
      for (a of setA) {
        for (b of setB) {
          map[cnt].add(a + b);
          map[cnt].add(a - b);
          map[cnt].add(a * b);
          map[cnt].add(parseInt(a / b));
        }
      }
    }
    if (map[cnt].has(number)) return cnt;
  }
  return -1;
}
