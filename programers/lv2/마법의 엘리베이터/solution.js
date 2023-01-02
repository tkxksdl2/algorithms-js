// function solution(storey) {
//   let answer = 2 ** 9;
//   const tokens = [{ token: storey + "", count: 0 }];

//   while (tokens.length > 0) {
//     let { token, count } = tokens.shift();
//     let currentNum = +token[token.length - 1];
//     token = token.slice(0, token.length - 1);

//     if (token.length > 0) {
//       tokens.push({ token, count: currentNum + count });
//       tokens.push({ token: +token + 1 + "", count: count + 10 - currentNum });
//     } else {
//       const conCount = Math.min(
//         count + currentNum,
//         count + 10 - currentNum + 1
//       );
//       if (conCount < answer) answer = conCount;
//     }
//   }
//   return answer;
// }
// sting 토큰을 이용한 덜 직관적인 코드

function solution(storey) {
  let answer = 2 ** 9;
  const tokens = [{ token: storey, count: 0 }];

  while (tokens.length > 0) {
    let { token, count } = tokens.shift();
    let currentNum = token % 10;
    token = (token - currentNum) / 10;

    if (token > 0) {
      tokens.push({ token, count: currentNum + count });
      tokens.push({ token: token + 1, count: count + 10 - currentNum });
    } else {
      const conCount = Math.min(
        count + currentNum,
        count + 10 - currentNum + 1
      );
      if (conCount < answer) answer = conCount;
    }
    console.log(tokens);
  }
  return answer;
}
const storey = 73;
console.log(solution(storey));
