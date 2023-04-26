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
    while (this.heap[leftIndex] && this.heap[leftIndex] < this.heap[curIndex]) {
      let swapIndex = leftIndex;
      if (
        this.heap[rightIndex] &&
        this.heap[leftIndex] > this.heap[rightIndex]
      ) {
        swapIndex = rightIndex;
      }
      this.swap(curIndex, swapIndex);
      curIndex = swapIndex;
      leftIndex = this.getLeftChild(curIndex);
      rightIndex = this.getRightChild(curIndex);
    }
    return returnValue;
  }
}

const h = new MinHeap();
h.heapPush(3);
h.heapPush(4);
h.heapPush(5);
h.heapPush(7);
h.heapPush(2);
console.log(h.heap);
console.log(h.heapPop());
console.log(h.heap);
console.log(h.heapPop());
console.log(h.heapPop());
console.log(h.heapPop());
console.log(h.heapPop());
console.log(h.heapPop());
console.log(h.heapPop());
console.log(h.heapPop());
console.log(h.heapPop());
