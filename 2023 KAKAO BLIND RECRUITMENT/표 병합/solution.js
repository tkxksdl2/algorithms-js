class Cell {
  constructor() {
    this.value = null;
    this.parents = null;
    this.child = [];
  }

  findRoot() {
    if (this.parents) return this.parents;
    return this;
  }
  getValue() {
    const value = this.findRoot().value;
    if (value) return value;
    else return "EMPTY";
  }
  update(value) {
    this.findRoot().value = value;
  }

  merge(inputCell) {
    const targetCell = inputCell.findRoot();
    const fromCell = this.findRoot();
    if (targetCell === fromCell) return;

    fromCell.child.forEach((cell) => {
      cell.parents = targetCell;
      targetCell.child.push(cell);
    });
    fromCell.child = [];
    fromCell.parents = targetCell;
    targetCell.child.push(fromCell);
    if (targetCell.value === null) {
      targetCell.value = fromCell.value;
    }
    fromCell.value = null;
  }
  unmerge() {
    const valueTemp = this.getValue();
    const targetCell = this.findRoot();
    targetCell.value = null;
    targetCell.child.forEach((cell) => {
      cell.parents = null;
    });
    targetCell.child = [];
    targetCell.parents = null;
    this.value = valueTemp;
  }
}

function solution(commands) {
  var answer = [];
  const matrix = Array.from(Array(50), () => Array(50));
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) matrix[i][j] = new Cell();
  }

  commands.forEach((command) => {
    const c = command.split(" ");
    if (c[0] === "UPDATE") {
      if (c.length === 4) matrix[+c[1] - 1][+c[2] - 1].update(c[3]);
      else if (c.length === 3) {
        matrix.forEach((row) => [
          row.forEach((cell) => {
            if (cell.value === c[1]) cell.update(c[2]);
          }),
        ]);
      }
    } else if (c[0] === "MERGE") {
      const [r1, c1, r2, c2] = [c[1], c[2], c[3], c[4]].map((v) => +v - 1);
      if (r1 !== r2 || c1 !== c2) {
        const targetCell = matrix[r1][c1];
        matrix[r2][c2].merge(targetCell);
      }
    } else if (c[0] === "UNMERGE") {
      matrix[+c[1] - 1][+c[2] - 1].unmerge();
    } else if (c[0] === "PRINT") {
      answer.push(matrix[+c[1] - 1][+c[2] - 1].getValue());
    }
  });

  return answer;
}

const commands = [
  "UPDATE 1 1 menu",
  "UPDATE 1 2 category",
  "UPDATE 2 1 bibimbap",
  "UPDATE 2 2 korean",
  "UPDATE 2 3 rice",
  "UPDATE 3 1 ramyeon",
  "UPDATE 3 2 korean",
  "UPDATE 3 3 noodle",
  "UPDATE 3 4 instant",
  "UPDATE 4 1 pasta",
  "UPDATE 4 2 italian",
  "UPDATE 4 3 noodle",
  "MERGE 2 2 4 1",
  "PRINT 2 2",
  "PRINT 4 1",
];

console.log(solution(commands));
