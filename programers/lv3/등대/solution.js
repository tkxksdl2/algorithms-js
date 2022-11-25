const n = 10;
const lighthouse = [
  [4, 1],
  [5, 1],
  [5, 6],
  [7, 6],
  [1, 2],
  [1, 3],
  [6, 8],
  [2, 9],
  [9, 10],
];

class Tree {
  constructor(id) {
    this.id = id;
    this.visitedNode = new Set();
    this.notVisitedNode = new Set();
  }

  visit(id) {
    this.notVisitedNode.delete(id);
    this.visitedNode.add(id);
  }
}

function solution(n, lighthouse) {
  let answer = 0;
  const treeArr = Array.from({ length: n + 1 }, (i, v) => new Tree(v));
  lighthouse.forEach(([a, b]) => {
    treeArr[a].notVisitedNode.add(b);
    treeArr[b].notVisitedNode.add(a);
  });

  const deque = [];
  // find leaf nodes
  for (const tree of treeArr) {
    if (tree.notVisitedNode.size == 1) deque.push(tree);
  }

  const lightsOn = new Set();
  while (deque.length > 0) {
    const currentNode = deque.shift();

    if (currentNode.notVisitedNode.size == 1) {
      let nextNodeId;
      for (id of currentNode.notVisitedNode) nextNodeId = id;
      const nextNode = treeArr[nextNodeId];

      nextNode.visit(currentNode.id);
      if (nextNode.notVisitedNode.size === 1) deque.push(nextNode);
    }
    for (nodeId of currentNode.visitedNode) {
      if (!lightsOn.has(nodeId)) {
        lightsOn.add(currentNode.id);
        answer += 1;
        break;
      }
    }
  }
  console.log(answer);
  return answer;
}

solution(n, lighthouse);
