function solution(k, n, reqs) {
  let answer = Infinity;
  const waitingTimes = new Array(k + 1)
    .fill(0)
    .map(() => new Array(n - k + 2).fill(-1));
  const mentoPlace = new Array(k + 1).fill(1);
  const typeReqs = new Array(k + 1).fill(0).map(() => new Array());
  for (const [st, et, type] of reqs) typeReqs[type].push([st, et]);

  mentoDfs(k, 1);
  return answer;

  function mentoDfs(curN, i) {
    if (curN === n) {
      let waitTimeSum = 0;
      for (let type = 1; type <= k; type++)
        waitTimeSum += calcWaitingTime(type, mentoPlace[type]);

      answer = Math.min(answer, waitTimeSum);
      return;
    }
    for (let j = i; j < mentoPlace.length; j++) {
      mentoPlace[j]++;
      mentoDfs(curN + 1, j);
      mentoPlace[j]--;
    }
  }

  function calcWaitingTime(type, mentoN) {
    if (waitingTimes[type][mentoN] >= 0) return waitingTimes[type][mentoN];

    let [curTime, i, waitTime] = [0, 0, 0];
    const working = [];
    const waiting = typeReqs[type];
    while (i < waiting.length) {
      const req = waiting[i++].slice();
      if (working.length < mentoN) {
        curTime = Math.max(curTime, req[0]);
      } else {
        working.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
        const endwork = working.shift();
        curTime = Math.max(curTime, endwork[0] + endwork[1]);
        if (curTime > req[0]) {
          waitTime += curTime - req[0];
          req[0] = curTime;
        }
      }
      working.push(req);
    }
    waitingTimes[type][mentoN] = waitTime;
    return waitTime;
  }
}
