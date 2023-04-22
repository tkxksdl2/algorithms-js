function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);
  rocks.push(distance);
  let maxDist = Math.floor(distance / (rocks.length - n));
  let minDist = 0;

  while (minDist < maxDist) {
    let mid = Math.floor((maxDist + minDist) / 2) + 1;
    let [curN, curDist, nextI] = [n, 0, 0];
    let isPassed = true;
    while (nextI < rocks.length) {
      if (rocks[nextI] - curDist < mid) {
        if (curN > 0) {
          curN--;
          nextI++;
        } else {
          maxDist = mid - 1;
          isPassed = false;
          break;
        }
      } else {
        curDist = rocks[nextI++];
      }
    }
    if (isPassed) minDist = mid;
  }
  return maxDist;
}
