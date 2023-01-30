function solution(numbers) {
  const answer = new Array(numbers.length);
  const heap = new MinHeap();
  heap.heapPush([numbers[0], 0]);
  for (let i = 1; i < numbers.length; i++) {
    while (heap.heap.length > 1 && heap.heap[1][0] < numbers[i]) {
      const [_, index] = heap.heapPop();
      answer[index] = numbers[i];
    }
    heap.heapPush([numbers[i], i]);
  }
  while (heap.heap.length > 1) {
    const [_, index] = heap.heapPop();
    answer[index] = -1;
  }
  return answer;
}

class MinHeap {
  constructor() {
    this.heap = [[-Infinity, -1]];
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
    let curIndex = this.heap.length - 1;
    while (
      this.heap[curIndex][0] < this.heap[this.getParentsIndex(curIndex)][0]
    ) {
      this.swap(curIndex, this.getParentsIndex(curIndex));
      curIndex = this.getParentsIndex(curIndex);
    }
  }
  heapPop() {
    if (this.heap.length === 1) return;
    this.swap(1, this.heap.length - 1);
    const value = this.heap.pop();
    let curIndex = 1;
    while (this.getLeftChildIndex(curIndex) < this.heap.length) {
      let swapIndex = this.getLeftChildIndex(curIndex);
      if (this.getRightChildIndex(curIndex) < this.heap.length) {
        const rightIndex = this.getRightChildIndex(curIndex);
        if (this.heap[rightIndex][0] < this.heap[swapIndex][0])
          swapIndex = rightIndex;
      }
      if (this.heap[swapIndex][0] < this.heap[curIndex][0]) {
        this.swap(swapIndex, curIndex);
        curIndex = swapIndex;
      } else break;
    }
    return value;
  }
}
