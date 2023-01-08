function solution(users, emoticons) {
  let [s, m] = [0, 0];
  const sales = [10, 20, 30, 40];
  const n = 4 ** emoticons.length;
  for (let i = 0; i < n; i++) {
    let salesIndex = i.toString(4);
    salesIndex = "0".repeat(emoticons.length - salesIndex.length) + salesIndex;
    const salesEmo = new Array(emoticons.length);
    for (let j = 0; j < emoticons.length; j++) {
      salesEmo[j] = emoticons[j] * (1 - sales[+salesIndex[j]] / 100);
    }
    let [sSum, mSum] = [0, 0];
    users.forEach((user) => {
      let tempM = 0;
      for (let k = 0; k < emoticons.length; k++) {
        if (user[0] <= sales[+salesIndex[k]]) {
          tempM += salesEmo[k];
        }
      }
      if (tempM >= user[1]) {
        sSum += 1;
      } else {
        mSum += tempM;
      }
    });
    if (sSum > s) {
      s = sSum;
      m = mSum;
      console.log(salesIndex);
    } else if (sSum === s && mSum > m) {
      m = mSum;
    }
  }
  return [s, m];
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000]
  )
);
