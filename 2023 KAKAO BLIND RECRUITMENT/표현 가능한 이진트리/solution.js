function solution(numbers) {
  var answer = [];
  numbers.forEach((n) => {
    let binary = n.toString(2);
    const maxLength = 2 ** (Math.floor(Math.log2(binary.length)) + 1) - 1;
    binary = "0".repeat(maxLength - binary.length) + binary;

    if (divide(0, binary.length, Math.floor(binary.length / 2), binary)) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  });
  return answer;
}

function divide(s, e, r, binary) {
  if (e - s <= 1) return true;
  if (binary[r] === "0") {
    for (let i = s; i < r; i++) {
      if (binary[i] === "1") return false;
    }
    for (let i = r + 1; i < e; i++) {
      if (binary[i] === "1") return false;
    }
  }
  return (
    divide(s, r, s + Math.floor((r - s) / 2), binary) &&
    divide(r + 1, e, r + 1 + Math.floor((e - r - 1) / 2), binary)
  );
}

console.log(solution([1]));
