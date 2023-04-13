function solution(picks, minerals) {
  const mP = [25, 5, 1];
  const mToN = { diamond: 0, iron: 1, stone: 2 };
  const group = [];
  minerals = minerals.slice(0, picks.reduce((sum, v) => sum + v, 0) * 5);

  let temp = [];
  let pSum = 0;
  for (let i = 0; i < minerals.length; i++) {
    const m = minerals[i];
    pSum += mP[mToN[m]];
    temp.push(mP[mToN[m]]);
    if (temp.length === 5 || i === minerals.length - 1) {
      group.push([[...temp], pSum]);
      temp = [];
      pSum = 0;
    }
  }
  group.sort((a, b) => b[1] - a[1]);

  let answer = 0;
  group.forEach((g) => {
    const pick = picks[0] > 0 ? 0 : picks[1] > 0 ? 1 : picks[2] > 0 ? 2 : -1;
    if (pick >= 0) {
      picks[pick]--;
      const pArr = g[0];
      pArr.forEach((v) => {
        answer += Math.ceil(v / mP[pick]);
      });
    }
  });

  return answer;
}
