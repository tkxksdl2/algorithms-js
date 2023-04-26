function solution(operations) {
  const minHeap = new MinMaxHeap("min");
  const maxHeap = new MinMaxHeap("max");
  let baseLine = undefined;

  for (const op of operations) {
    let [command, num] = op.split(" ");
    num = parseInt(num);
    if (command === "I") {
      if (!baseLine) baseLine = num;
      else if (num >= baseLine) maxHeap.heapPush(num);
      else minHeap.heapPush(num);
    } else {
      const [targetHeap, subHeap] =
        num === -1 ? [minHeap, maxHeap] : [maxHeap, minHeap];
      if (targetHeap.getSize() > 0) targetHeap.heapPop();
      else if (subHeap.getSize() > 0) {
        const tempArr = [];
        while (subHeap.getSize() > 0) {
          tempArr.push(subHeap.heapPop());
        }
        const mid = Math.floor(tempArr.length / 2);
        while (tempArr.length > 0) {
          if (tempArr.length - 1 > mid) targetHeap.heapPush(tempArr.pop());
          else if (tempArr.length - 1 === mid) baseLine = tempArr.pop();
          else subHeap.heapPush(tempArr.pop());
        }
      } else baseLine = undefined;
    }
  }
  if (!baseLine) return [0, 0];
  const maxVal = maxHeap.getSize() > 0 ? maxHeap.heapPop() : baseLine;
  const minVal = minHeap.getSize() > 0 ? minHeap.heapPop() : baseLine;
  return [maxVal, minVal];
}

class MinMaxHeap {
  constructor(minMax) {
    this.minMax = minMax;
    this.heap = [minMax === "min" ? -Infinity : Infinity];
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
    while (
      this.minMax === "min"
        ? this.heap[curIndex] < this.heap[parentsIndex]
        : this.heap[curIndex] > this.heap[parentsIndex]
    ) {
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
        (this.minMax === "min"
          ? this.heap[leftIndex] > this.heap[rightIndex]
          : this.heap[leftIndex] < this.heap[rightIndex])
      ) {
        swapIndex = rightIndex;
      }
      if (
        this.minMax === "min"
          ? this.heap[swapIndex] < this.heap[curIndex]
          : this.heap[swapIndex] > this.heap[curIndex]
      ) {
        this.swap(curIndex, swapIndex);
        curIndex = swapIndex;
        leftIndex = this.getLeftChild(curIndex);
        rightIndex = this.getRightChild(curIndex);
      } else break;
    }
    return returnValue;
  }
}
