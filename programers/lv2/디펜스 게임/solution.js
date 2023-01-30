function solution(n, k, enemy) {
  let answer = 0;
  const usedHeap = new MaxHeap();
  for (let i = 0; i < enemy.length; i++) {
    usedHeap.heapPush(enemy[i]);
    while (usedHeap.sum > n && k > 0 && usedHeap.heap.length > 1) {
      usedHeap.heapPop();
      k -= 1;
    }
    if (usedHeap.sum <= n) {
      answer = i + 1;
    } else break;
  }

  return answer;
}

class MaxHeap {
  constructor() {
    this.heap = [Infinity];
    this.sum = 0;
  }
  getLeftChildIndex(index) {
    return index * 2;
  }
  getRightChildIndex(index) {
    return index * 2 + 1;
  }
  getParentsIndex(index) {
    return Math.floor(index / 2);
  }
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  heapPush(value) {
    this.heap.push(value);
    this.sum += value;
    let curIndex = this.heap.length - 1;
    while (this.heap[curIndex] > this.heap[this.getParentsIndex(curIndex)]) {
      this.swap(curIndex, this.getParentsIndex(curIndex));
      curIndex = this.getParentsIndex(curIndex);
    }
  }
  heapPop() {
    if (this.heap.length === 1) return;
    this.swap(1, this.heap.length - 1);
    const value = this.heap.pop();
    this.sum -= value;
    let curIndex = 1;
    while (this.getLeftChildIndex(curIndex) < this.heap.length) {
      let swapIndex = this.getLeftChildIndex(curIndex);
      if (this.getRightChildIndex(curIndex) < this.heap.length) {
        const rightIndex = this.getRightChildIndex(curIndex);
        if (this.heap[rightIndex] > this.heap[swapIndex])
          swapIndex = rightIndex;
      }
      if (this.heap[swapIndex] > this.heap[curIndex]) {
        this.swap(swapIndex, curIndex);
        curIndex = swapIndex;
      } else break;
    }
    return value;
  }
}

console.log(solution(100, 4, [100, 100, 100, 200, 50, 40, 1, 1]));

console.log(solution(100, 4, [100, 100, 100, 200, 50, 40, 1, 1]));
