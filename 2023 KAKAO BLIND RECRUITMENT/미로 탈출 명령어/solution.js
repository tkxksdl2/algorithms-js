// d, l, r, u
function solution(n, m, x, y, r, c, k) {
  const order = ["d", "l", "r", "u"];
  const delta = [
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
  ];
  let answer = "";
  let currntK = k;
  if (!isPossible(n, m, x, y, r, c, k)) return "impossible";

  while (answer.length < k) {
    for (let i = 0; i < 4; i++) {
      if (
        isPossible(n, m, x + delta[i][0], y + delta[i][1], r, c, currntK - 1)
      ) {
        answer += order[i];
        x += delta[i][0];
        y += delta[i][1];
        currntK -= 1;
        break;
      }
    }
  }
  return answer;
}

function isPossible(n, m, x, y, r, c, k) {
  dist = Math.abs(x - r) + Math.abs(y - c);
  if (x < 1 || x > n || y < 1 || y > m || dist > k || dist % 2 !== k % 2) {
    return false;
  }
  return true;
}
