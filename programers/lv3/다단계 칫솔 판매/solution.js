function solution(enroll, referral, seller, amount) {
  var answer = new Array(enroll.length);
  const idMap = {};
  enroll.forEach((name) => {
    idMap[name] = { sales: [], ref: "-" };
  });
  seller.forEach((seller, i) => {
    idMap[seller]["sales"].push(amount[i] * 100);
  });
  referral.forEach((ref, i) => {
    idMap[enroll[i]]["ref"] = ref;
  });

  for (let i = enroll.length - 1; i >= 0; i--) {
    const seller = enroll[i];
    const ref = idMap[seller]["ref"];
    let finalValue = 0;
    idMap[seller]["sales"].forEach((v) => {
      const charge = Math.floor(v / 10);
      finalValue += v - charge;
      if (ref !== "-" && charge > 0) idMap[ref]["sales"].push(charge);
    });

    answer[i] = finalValue;
  }

  return answer;
}
