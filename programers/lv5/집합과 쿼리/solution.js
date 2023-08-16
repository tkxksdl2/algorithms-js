function solution(n, queries) {
  var answer = [];
  const nodes = new Array(n).fill(0).map((_, i) => new Node(i));
  const tails = {};

  let queryCnt = 0;
  let listCnt = 0;
  for (const [c, x, y] of queries) {
    const nodeX = nodes[x].getLabel();
    const nodeY = nodes[y].getLabel();

    switch (c) {
      case 1:
        if (nodeY.listIdx && nodeY.listIdx && nodeY.listIdx === nodeX.listIdx)
          break;

        if (!nodeX.listIdx) nodeX.listIdx = ++listCnt;
        if (nodeY.listIdx) tails[nodeY.listIdx] = null;
        nodeY.makeGroup();
        nodeY.listIdx = nodeX.listIdx;
        nodeY.queryCnt = ++queryCnt;

        const tail = tails[nodeX.listIdx] ? tails[nodeX.listIdx] : nodeX;
        nodeY.head = tail;
        tail.child = nodeY;
        tails[nodeX.listIdx] = nodeY;
        break;
      case 2:
        if (nodeX.queryCnt > nodeY.queryCnt) break;

        if (nodeX.head && nodeY.child) {
          nodeX.head.child = nodeY.child;
          nodeY.child.head = nodeX.head;
        } else {
          if (nodeX.head) nodeX.head.child = null;
          if (nodeY.child) nodeY.child.head = null;
          else tails[nodeX.listIdx] = nodeX.head ? nodeX.head : null;
        }
        nodeX.head = null;
        nodeY.child = null;
        nodeX.makeGroup();
        nodeX.listIdx = ++listCnt;
        tails[nodeX.listIdx] = nodeX;
        break;
      case 3:
        if (
          nodeX.n === nodeY.n ||
          (nodeX.listIdx && nodeY.listIdx && nodeX.listIdx === nodeY.listIdx)
        ) {
          answer.push("Yes");
        } else answer.push("No");
        break;
    }
  }
  return answer;
}

class Node {
  constructor(n) {
    this.n = n;
    this.label = this;
    this.listIdx;
    this.queryCnt = 0;
    this.head;
    this.child;
  }

  getLabel() {
    let cur = this;
    const shouldUpdate = [];
    while (cur.label.n !== cur.n) {
      shouldUpdate.push(cur);
      cur = cur.label;
    }
    for (const node of shouldUpdate) node.label = cur;
    return cur;
  }

  makeGroup() {
    let head = this.head;
    let child = this.child;
    this.unChain();
    while (head || child) {
      if (head) {
        head.label = this;
        const nxt = head.head;
        head.unChain();
        head = nxt;
      }
      if (child) {
        child.label = this;
        const nxt = child.child;
        child.unChain();
        child = nxt;
      }
    }
  }

  unChain() {
    this.head = null;
    this.child = null;
    this.listIdx = null;
  }
}
