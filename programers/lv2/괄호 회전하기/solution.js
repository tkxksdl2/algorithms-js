function solution(s) {
  var answer = 0;
  const open = ["[", "{", "("];
  const close = ["]", "}", ")"];

  for (let si = 0; si < s.length; si++) {
    const stack = [];
    let isValid = true;
    for (let i = 0; i < s.length; i++) {
      const c = s[(si + i) % s.length];
      if (open.includes(c)) stack.push(c);
      else if (
        stack.length === 0 ||
        open.indexOf(stack.pop()) !== close.indexOf(c)
      ) {
        isValid = false;
        break;
      }
    }
    if (stack.length === 0 && isValid) answer++;
  }
  return answer;
}
