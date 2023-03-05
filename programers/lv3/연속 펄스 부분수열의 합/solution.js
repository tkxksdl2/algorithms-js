function solution(sequence) {
  let answer = -Infinity;
  const purseA = sequence.map((v, i) => (i % 2 === 0 ? -v : v));
  const purseB = sequence.map((v, i) => (i % 2 === 1 ? -v : v));
  for (const purse of [purseA, purseB]) {
    let maxSum = -Infinity;
    let minSum = 0;
    let sum = 0;
    for (let i = 0; i < purse.length; i++) {
      sum += purse[i];
      maxSum = Math.max(maxSum, sum);
      minSum = Math.min(minSum, sum);
    }
    answer = Math.max(maxSum - minSum, answer);
  }
  return answer;
}
