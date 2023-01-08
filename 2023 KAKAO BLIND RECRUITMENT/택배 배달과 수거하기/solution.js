function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let [dIndex, pIndex] = [n - 1, n - 1];

  while (dIndex >= 0 || pIndex >= 0) {
    while (deliveries[dIndex] === 0 && dIndex >= 0) dIndex -= 1;
    while (pickups[pIndex] === 0 && pIndex >= 0) pIndex -= 1;
    answer += Math.max(dIndex + 1, pIndex + 1) * 2;
    const indexes = [dIndex, pIndex];
    const targets = [deliveries, pickups];
    const caps = [cap, cap];

    for (let i = 0; i <= 1; i++) {
      while (caps[i] > 0 && indexes[i] >= 0) {
        if (targets[i][indexes[i]] > 0) {
          targets[i][indexes[i]] -= 1;
          caps[i] -= 1;
        } else {
          indexes[i] -= 1;
        }
      }
    }
  }
  return answer;
}

console.log(solution(5, 5, [1, 5, 0, 1, 1], [0, 3, 0, 4, 0]));
