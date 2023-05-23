function solution(n, t, m, p) {
  var answer = "";
  let [num, sNum, turn] = [0, "", p - 1];
  while (t-- > 0) {
    while (sNum.length <= turn) sNum += (num++).toString(n);
    answer += sNum[turn];
    turn += m;
  }
  return answer.toUpperCase();
}
