function solution(edges, target) {
  const tree = new Array(edges.length + 1);
  for (let i = 1; i <= edges.length + 1; i++) {
    tree[i] = new Node(i, target[i - 1]);
  }
  edges.forEach(([from, to]) => {
    tree[from].child.push(tree[to]);
    tree[from].child.sort((a, b) => a.nodeNum - b.nodeNum);
  });
  for (let i = tree.length - 1; i > 0; i--) {
    tree[i].setMinCnt();
  }
  const root = tree[1];
  let [_, answer] = root.findMainPath();

  return answer;
}

class Node {
  constructor(nodeNum, value) {
    this.nodeNum = nodeNum;
    this.value = value;
    this.child = [];
    this.minCnt = null;
  }

  setMinCnt() {
    this.minCnt = this.getMinCnt();
  }

  getMinCnt() {
    if (this.child.length === 0) {
      const cnts = getCounts(this.value);
      return cnts[3];
    } else if (this.minCnt) {
      return this.minCnt;
    }
    let maxCnt = 0;
    let maxIndex;
    for (let i = 0; i < this.child.length; i++) {
      const childNodeCnt = this.child[i].getMinCnt();
      if (childNodeCnt >= maxCnt) {
        maxCnt = childNodeCnt;
        maxIndex = i;
      }
    }
    let minCnt = 0;
    for (let i = 0; i < this.child.length; i++) {
      if (i <= maxIndex) {
        minCnt += maxCnt;
      } else {
        minCnt += maxCnt - 1;
      }
    }
    return minCnt;
  }

  findMainPath() {
    if (this.child.length === 0) {
      const order = this.getOrder(this.minCnt);
      return [this.minCnt, order];
    }

    let maxNode;
    let maxNum;
    let targetCnt = 0;
    this.child.forEach((childNode) => {
      const minCnt = childNode.minCnt;
      if (minCnt >= targetCnt) {
        maxNode = childNode;
        maxNum = childNode.nodeNum;
        targetCnt = minCnt;
      }
    });

    const orders = new Array(this.child.length);
    const [targetCount, order] = maxNode.findMainPath();
    if (order.includes(-1)) return [null, [-1]];

    this.child.forEach((childNode, index) => {
      if (childNode.nodeNum <= maxNum) {
        orders[index] = childNode.getOrder(targetCount);
      } else if (childNode.nodeNum > maxNum) {
        orders[index] = childNode.getOrder(targetCount - 1);
      }
    });

    const mergedOrder = mergeOrders(orders);
    return [mergedOrder.length, mergedOrder];
  }

  getOrder(targetCnt) {
    if (this.child.length === 0) {
      let [oneCnt, twoCnt, threeCnt] = getCounts(this.value);
      if (oneCnt + twoCnt + threeCnt > targetCnt) return [-1];

      while (threeCnt + twoCnt + oneCnt < targetCnt) {
        if (twoCnt > 0) {
          twoCnt -= 1;
          oneCnt += 2;
        } else if (threeCnt > 0) {
          threeCnt -= 1;
          twoCnt += 1;
          oneCnt += 1;
        } else {
          return [-1];
        }
      }

      const order = [];
      [oneCnt, twoCnt, threeCnt].forEach((cnt, i) => {
        for (let j = 0; j < cnt; j++) order.push(i + 1);
      });
      return order;
    }
    const dividedCnt = new Array(this.child.length).fill(0);
    let i = 0;
    while (targetCnt > 0) {
      dividedCnt[i] += 1;
      i = (i + 1) % this.child.length;
      targetCnt -= 1;
    }

    const orders = [];
    this.child.forEach((childNode, index) => {
      orders.push(childNode.getOrder(dividedCnt[index]));
    });
    return mergeOrders(orders);
  }
}

function getCounts(value) {
  const threeCnt = Math.floor(value / 3);
  const twoCnt = Math.floor((value % 3) / 2);
  const oneCnt = (value % 3) % 2;
  const total = oneCnt + twoCnt + threeCnt;
  return [oneCnt, twoCnt, threeCnt, total];
}

function mergeOrders(orders) {
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].includes(-1)) return [-1];
  }
  const res = [];
  for (let i = 0; i < orders[0].length; i++) {
    orders.forEach((order) => {
      if (order.length > i) {
        res.push(order[i]);
      }
    });
  }
  return res;
}

console.log(
  solution(
    [
      [2, 4],
      [1, 2],
      [6, 8],
      [1, 3],
      [5, 7],
      [2, 5],
      [3, 6],
      [6, 10],
      [6, 9],
      [5, 11],
      [11, 12],
    ],
    [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0]
  )
);
