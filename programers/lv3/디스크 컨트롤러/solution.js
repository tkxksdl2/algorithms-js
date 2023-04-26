function solution(jobs) {
  var answer = 0;
  const waitHeap = new MinHeap();
  const jobsObj = {};
  for (const [t, v] of jobs) {
    if (jobsObj[t]) jobsObj[t].push(v);
    else jobsObj[t] = [v];
  }
  let curRemainTime = 0;
  let t = 0;
  while (t <= 1000 || waitHeap.getSize() >= 1 || curRemainTime) {
    if (jobsObj[t]) {
      for (v of jobsObj[t]) waitHeap.heapPush(v);
    }
    if (curRemainTime === 0) curRemainTime = waitHeap.heapPop();

    answer += waitHeap.getSize();
    if (curRemainTime > 0) {
      answer += 1;
      curRemainTime--;
    }
    t++;
  }
  return Math.floor(answer / jobs.length);
}

class MinHeap {
  constructor() {
    this.heap = [-Infinity];
  }
  getSize() {
    return this.heap.length - 1;
  }
  getLeftChild(i) {
    return i * 2;
  }
  getRightChild(i) {
    return i * 2 + 1;
  }
  getParents(i) {
    return Math.floor(i / 2);
  }
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  heapPush(v) {
    this.heap.push(v);
    let curIndex = this.heap.length - 1;
    let parentsIndex = this.getParents(curIndex);
    while (this.heap[curIndex] < this.heap[parentsIndex]) {
      this.swap(curIndex, parentsIndex);
      curIndex = parentsIndex;
      parentsIndex = this.getParents(parentsIndex);
    }
  }
  heapPop() {
    if (this.getSize() === 0) return 0;
    this.swap(1, this.heap.length - 1);
    const returnValue = this.heap.pop();
    let curIndex = 1;
    let leftIndex = this.getLeftChild(curIndex);
    let rightIndex = this.getRightChild(curIndex);
    while (this.heap[leftIndex]) {
      let swapIndex = leftIndex;
      if (
        this.heap[rightIndex] &&
        this.heap[leftIndex] > this.heap[rightIndex]
      ) {
        swapIndex = rightIndex;
      }
      if (this.heap[swapIndex] < this.heap[curIndex]) {
        this.swap(curIndex, swapIndex);
        curIndex = swapIndex;
        leftIndex = this.getLeftChild(curIndex);
        rightIndex = this.getRightChild(curIndex);
      } else break;
    }
    return returnValue;
  }
}
