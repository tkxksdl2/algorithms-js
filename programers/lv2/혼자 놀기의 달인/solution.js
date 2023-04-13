// https://school.programmers.co.kr/learn/courses/30/lessons/131130

function solution(cards) {
  var answer = 0;
  const used = new Set();
  const groupLens = [];
  cards.forEach((card, boxI) => {
    if (!used.has(boxI)) {
      used.add(boxI);
      let cnt = 1;
      let nextCard = card - 1;
      while (!used.has(nextCard)) {
        used.add(nextCard);
        cnt++;
        nextCard = cards[nextCard] - 1;
      }
      groupLens.push(cnt);
    }
  });
  groupLens.sort((a, b) => b - a);
  return groupLens.length >= 2 ? groupLens[0] * groupLens[1] : 0;
}
