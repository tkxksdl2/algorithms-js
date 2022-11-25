const number = 5;
const limit = 3;
const power = 2;

function solution(number, limit, power) {
  let answer = 0;
  const measureCountList = Array.from({ length: number }, () => 0);

  measureCountList.forEach((_, index) => {
    let target = index;
    const step = index + 1;
    while (target < number) {
      measureCountList[target] += 1;
      target += step;
    }
  });

  console.log(measureCountList);
  measureCountList.forEach((count) => {
    if (count > limit) {
      answer += power;
    } else {
      answer += count;
    }
  });

  return answer;
}
console.log(solution(number, limit, power));
