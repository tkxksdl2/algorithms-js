function solution(today, terms, privacies) {
  const [y, m, d] = today.split(".").map((v) => +v);
  const termsObj = {};
  terms.forEach((str) => {
    const [term, n] = str.split(" ");
    termsObj[term] = +n;
  });

  let answer = [];
  privacies.forEach((privacy, index) => {
    const [date, term] = privacy.split(" ");
    let [dy, dm, dd] = date.split(".").map((v) => +v);
    dm += termsObj[term];
    dy += dm % 12 === 0 ? parseInt(dm / 12) - 1 : parseInt(dm / 12);
    dm = dm % 12 === 0 ? 12 : dm % 12;
    console.log(dy, dm, dd);
    if (dy < y) {
      answer.push(index + 1);
    } else if (dy === y && dm < m) {
      answer.push(index + 1);
    } else if (dy === y && dm === m && dd <= d) {
      answer.push(index + 1);
    }
  });

  return answer;
}

const today = "2019.02.15";
const terms = ["Z 3", "D 1"];
const privacies = [
  "2019.01.01 D",
  "2019.11.15 Z",
  "2019.08.02 D",
  "2019.07.01 D",
  "2022.12.28 D",
  "2000.01.01 D",
];
console.log(solution(today, terms, privacies));
