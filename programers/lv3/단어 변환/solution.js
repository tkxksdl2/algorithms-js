function solution(begin, target, words) {
  const minCnts = new Array(words.length).fill(Infinity);
  const queue = [[begin, 0]];
  for (let i = 0; i < queue.length; i++) {
    let [cWord, cnt] = queue[i];
    if (cWord === target) return cnt;
    for (let j = 0; j < words.length; j++) {
      if (cnt + 1 >= minCnts[j]) continue;
      const nWord = words[j];
      let diff = 0;
      for (let k = 0; k < nWord.length; k++) {
        if (cWord[k] !== nWord[k]) diff++;
      }
      if (diff === 1) {
        minCnts[j] = cnt + 1;
        queue.push([nWord, cnt + 1]);
      }
    }
  }
  return 0;
}
