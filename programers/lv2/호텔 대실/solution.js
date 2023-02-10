function solution(book_time) {
  function getTime(s) {
    const [h, m] = s.split(":").map((v) => +v);
    return h * 60 + m;
  }
  const timeTable = new Array(60 * 24 + 10).fill(0);
  for ([s, e] of book_time) {
    let [st, et] = [getTime(s), getTime(e) + 9];
    while (st <= et) {
      timeTable[st]++;
      st++;
    }
  }
  return Math.max(...timeTable);
}
