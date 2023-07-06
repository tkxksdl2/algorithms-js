function solution(n) {
  var answer = "";
  let d = 1;
  do {
    const m = Math.ceil(n / d);
    const r = m % 3;
    switch (r) {
      case 1:
        answer = "1" + answer;
        break;
      case 2:
        answer = "2" + answer;
        break;
      case 0:
        answer = "4" + answer;
        break;
    }
    d *= 3;
    n = Math.max(0, n - d);
  } while (n > 0);
  return answer;
}
