function solution(s) {
  var answer = [];
  for (let x of s) {
    const stack = [x[0], x[1]];
    let [cnt, i] = [0, 2];
    while (i < x.length) {
      if (
        x[i] === "0" &&
        stack.length >= 2 &&
        stack[stack.length - 1] === "1" &&
        stack[stack.length - 2] === "1"
      ) {
        stack.pop();
        stack.pop();
        cnt++;
      } else stack.push(x[i]);
      i++;
    }
    let endIdx = -1;
    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i] === "0") {
        endIdx = i;
        break;
      }
    }
    const str = stack.join("");
    answer.push(
      str.substring(0, endIdx + 1) +
        "110".repeat(cnt) +
        str.substring(endIdx + 1, str.length)
    );
  }
  return answer;
}
