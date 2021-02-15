const TreeNode = require('./Tree.js');

// check if two binary trees are identical

// depth first traversal

// start with printing a traversal

let areIdentical = true;

function areTreesIdenitcal(tree1, tree2) {
  return traverseTrees(tree1, tree2);
}

function traverseTrees(tree1, tree2) {
  
  if (tree1 === undefined) {
    if (tree2 === undefined) {
      return;
    } else {
      areIdentical = false;
      return;
    }
  } else if (tree2 === undefined) {
      areIdentical = false;
      return;
  }

  if (areIdentical && tree1.data() === tree2.data()) {
    traverseTrees(tree1.left(), tree2.left());
    traverseTrees(tree1.right(), tree2.right());
  } else {
    areIdentical = false;
    return;
  }
}

// more succienct version
function areIdentical(tree1, tree2) {
    if (!tree1 && !tree2) return true;
  
    if (tree1 && tree2) {
      return tree1.data() === tree2.data()
        && areIdentical(tree1.left(), tree2.left())
        && areIdentical(tree1.right(), tree2.right());
    } else {
      return false;
    }
  }  

let tree1 = new TreeNode();
tree1.add(4);
tree1.add(2);
tree1.add(3);
tree1.add(1);

let tree2 = new TreeNode();
tree2.add(4);
tree2.add(2);
tree2.add(3);

areTreesIdenitcal(tree1, tree2);
console.log(areIdentical);