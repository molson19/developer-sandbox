module.exports = class TreeNode {
  constructor(dataToAdd) {
    this._root = dataToAdd;
    this._left = undefined;
    this._right = undefined;
  }

  data() {
    return this._root;
  }

  right() {
    return this._right;
  }

  left() {
    return this._left;
  }

  add(item) {
    if (this.isEmpty()) {
      this._root = item;
    } else if (item < this._root) {
      if (this._left === undefined) {
        this._left = new TreeNode(item);
      } else {
        this._left.add(item);
      }
    } else if (item > this._root) {
      if (this._right === undefined) {
        this._right = new TreeNode(item);
      } else {
        this._right.add(item);
      }
    }
  }

  isEmpty() {
    return this._root === undefined;
  }
}