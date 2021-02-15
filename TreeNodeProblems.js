// start with printing a traversal

const TreeNode = require('./Tree.js');

function printTree(tree) {
    // 
    console.log('[ ');
    printTreePreOrder(tree);
    console.log(' ]');
  
    console.log('[ ');
    printTreeInOrder(tree);
    console.log(' ]');
  
    console.log('[ ');
    printTreePostOrder(tree);
    console.log(' ]');
  }
  
  function printTreePreOrder(tree) {
    if (tree !== undefined) {
      let data = tree.data();
      console.log(` ${data} `);
      printTreePreOrder(tree.left());
      printTreePreOrder(tree.right());
    }
  }
  
  function printTreeInOrder(tree) {
    if (tree !== undefined) {
      let data = tree.data();
      printTreeInOrder(tree.left());
      console.log(` ${data} `);
      printTreeInOrder(tree.right());
    }
  }
  
  function printTreePostOrder(tree) {
    if (tree !== undefined) {
      let data = tree.data();
      printTreePostOrder(tree.left());
      printTreePostOrder(tree.right());
      console.log(` ${data} `);
    }
  }
  
  let tree = new TreeNode();
  tree.add(4);
  tree.add(1);
  tree.add(7);
  tree.add(5);
  tree.add(9);
  printTree(tree);