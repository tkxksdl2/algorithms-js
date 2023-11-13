function solution(rc, operations) {
  var answer = [];
  let head = 0;
  const [leftCol, rightCol] = [[], []];
  let [lColHead, rColHead] = [0, 0];
  const rowHeads = new Array(rc.length).fill(0);

  for (const row of rc) {
    leftCol.push(row[0]);
    rightCol.push(row[row.length - 1]);
  }

  for (const o of operations) {
    if (o === "ShiftRow") {
      head = getLastIdx(head, rc.length);
      rColHead = getLastIdx(rColHead, rc.length);
      lColHead = getLastIdx(lColHead, rc.length);
      continue;
    }

    const topRow = rc[head];
    topRow[rowHeads[head]] = leftCol[lColHead];
    topRow[getLastIdx(rowHeads[head], rc[0].length)] = rightCol[rColHead];

    const tail = getLastIdx(head, rc.length);
    const botRow = rc[tail];
    botRow[rowHeads[tail]] = leftCol[getLastIdx(lColHead, rc.length)];
    botRow[getLastIdx(rowHeads[tail], rc[0].length)] =
      rightCol[getLastIdx(rColHead, rc.length)];

    rowHeads[head] = getLastIdx(rowHeads[head], rc[0].length);

    rColHead = getLastIdx(rColHead, rc.length);
    rightCol[rColHead] = topRow[getLastIdx(rowHeads[head], rc[0].length)];

    rowHeads[tail] = (rowHeads[tail] + 1) % rc[0].length;
    botRow[getLastIdx(rowHeads[tail], rc[0].length)] =
      rightCol[getLastIdx(rColHead, rc.length)];

    lColHead = (lColHead + 1) % rc.length;
    leftCol[getLastIdx(lColHead, rc.length)] = botRow[rowHeads[tail]];
    topRow[rowHeads[head]] = leftCol[lColHead];
  }

  for (let i = 0; i < rc.length; i++) {
    const row = [];
    const rowIdx = (head + i) % rc.length;
    for (let j = 0; j < rc[0].length; j++) {
      const colIdx = (j + rowHeads[rowIdx]) % rc[0].length;
      row.push(rc[rowIdx][colIdx]);
    }
    row[0] = leftCol[(lColHead + i) % rc.length];
    row[row.length - 1] = rightCol[(rColHead + i) % rc.length];
    answer.push(row);
  }

  return answer;

  function getLastIdx(idx, len) {
    return idx - 1 < 0 ? len - 1 : idx - 1;
  }
}
