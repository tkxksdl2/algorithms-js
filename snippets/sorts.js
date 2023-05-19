const selection = (arr) => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    let minI = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minI]) {
        minI = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minI];
    arr[minI] = temp;
  }
  return arr;
};

const insertion = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const target = arr[i];
    let swapI = i;
    for (let j = i - 1; j >= -1; j--) {
      if (arr[j] > target) {
        arr[j + 1] = arr[j];
        swapI = j;
      } else break;
    }
    arr[swapI] = target;
  }
  return arr;
};

const merge = (arr) => {
  const divide = (s, e) => {
    if (e - s < 1) return;
    const m = Math.ceil((s + e) / 2);
    divide(s, m - 1);
    divide(m, e);
    conquer(s, m, e);
  };
  const conquer = (s, m, e) => {
    const c = [];
    let [i, j] = [s, m];
    while (i < m && j <= e) {
      if (arr[i] < arr[j]) {
        c.push(arr[i++]);
      } else c.push(arr[j++]);
    }
    while (i < m) c.push(arr[i++]);
    while (j <= e) c.push(arr[j++]);
    for (let k = 0; k < c.length; k++) arr[s + k] = c[k];
  };

  divide(0, arr.length - 1);
  return arr;
};

const bubble = (arr) => {
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const quick = (arr) => {
  const divide = (s, e) => {
    if (e - s < 1) return;
    const p = s;
    let [l, r] = [s + 1, e];
    while (l <= r) {
      while (arr[l] < arr[p] && l <= r) l++;
      while (arr[r] >= arr[p] && l <= r) r--;
      if (l <= r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
      }
    }
    let temp = arr[p];
    arr[p] = arr[r];
    arr[r] = temp;

    divide(s, r - 1);
    divide(r + 1, e);
  };

  divide(0, arr.length - 1);
  return arr;
};

/** 모든 자릿수에 대응하는 기수 정렬로
 *  기수 테이블과 더불어 낮은 자릿수 저장하는 rowDigits 큐 활용
 */
const radix = (arr) => {
  const rTable = new Array(10).fill(0).map(() => new Array());
  let div = 1;
  let sortedIndex = -1;
  while (sortedIndex < arr.length - 1) {
    const lowDigits = [];
    for (let i = sortedIndex + 1; i < arr.length; i++) {
      const digits = String(arr[i]);
      if (digits.length < div) lowDigits.push(arr[i]);
      else rTable[+digits[digits.length - div]].push(arr[i]);
    }

    while (lowDigits.length > 0) arr[++sortedIndex] = lowDigits.shift();

    let i = sortedIndex + 1;
    for (bucket of rTable) {
      while (bucket.length > 0) arr[i++] = bucket.shift();
    }
    div++;
  }
  return arr;
};

const arr = new Array(10).fill(0).map((_, i) => i);
arr.sort(() => Math.random() - 0.5);

console.log("무작위 array\n", arr);
console.log("선택 정렬\n", selection(arr.slice()));
console.log("삽입 정렬\n", insertion(arr.slice()));
console.log("병합 정렬\n", merge(arr.slice()));
console.log("버블 정렬\n", bubble(arr.slice()));
console.log("퀵 정렬\n", quick(arr.slice()));
console.log("기수 정렬\n", radix(arr.slice()));
console.log("기수 정렬\n", radix([32, 14, 543, 64, 45, 77]));
