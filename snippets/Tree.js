class bTree {
  constructor(arr) {
    this.tree = [null].concat(arr);
    this.len = arr.length;
  }

  preOrder(idx = 1) {
    if (idx < 0 || idx >= this.tree.length) return;

    console.log(this.tree[idx]);
    this.preOrder(idx * 2);
    this.preOrder(idx * 2 + 1);
  }

  inOrder(idx = 1) {
    if (idx < 0 || idx >= this.tree.length) return;

    this.inOrder(idx * 2);
    console.log(this.tree[idx]);
    this.inOrder(idx * 2 + 1);
  }

  postOrder(idx = 1) {
    if (idx < 0 || idx >= this.tree.length) return;

    this.postOrder(idx * 2);
    this.postOrder(idx * 2 + 1);
    console.log(this.tree[idx]);
  }
}

const arr = new Array(10).fill(0).map((_, i) => i);
const tree = new bTree(arr);

tree.preOrder();
console.log("////////////////");
tree.inOrder();
console.log("////////////////");
tree.postOrder();
