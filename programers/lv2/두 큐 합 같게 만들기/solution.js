function solution(queue1, queue2) {
  const queue3 = queue1.concat(queue2);
  let sum = 0;
  for (let i = 0; i < queue3.length; i++) {
    sum += queue3[i];
    queue3[i] = sum;
  }
  const target = sum / 2;
  let [s, e] = [-1, queue1.length - 1];
  let cur = queue3[e];
  let cnt = 0;
  while (s < queue3.length && e < queue3.length) {
    if (cur === target) return cnt;
    else if (cur > target) s++;
    else if (cur < target) e++;
    cnt++;
    cur = s >= 0 ? queue3[e] - queue3[s] : queue3[e];
  }
  return -1;
}
