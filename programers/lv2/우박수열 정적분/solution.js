const k = 5;
const ranges = [
  [0, 0],
  [0, -1],
  [2, -3],
  [3, -3],
];

function solution(k, ranges) {
  let answer = [];
  const numList = [k];
  const accList = [0];
  while (k > 1) {
    k = k % 2 ? k * 3 + 1 : k / 2;
    accList.push(
      accList[accList.length - 1] + (numList[numList.length - 1] + k) / 2
    );
    numList.push(k);
  }
  ranges.forEach(([a, b]) => {
    if (a > numList.length - 1 + b) {
      answer.push(-1.0);
    } else {
      answer.push(accList[numList.length - 1 + b] - accList[a]);
    }
  });
  return answer;
}

console.log(solution(k, ranges));
