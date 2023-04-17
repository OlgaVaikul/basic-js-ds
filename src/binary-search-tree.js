const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    this.root = addNum(this.root, data);

    function addNum(node, data) {
      if(!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNum(node.left, data);
      } else {
        node.right = addNum(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    return searchNum(this.root, data);

    function searchNum(node, data) {
      if(!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ?
      searchNum(node.left, data):
      searchNum(node.right, data);
  }
  }

  find(data) {
    return findNum(this.root, data);

    function findNum(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        return findNum(node.right, data);
      } else {
        return findNum(node.left, data);
      }
    }
  }

  remove(data) {
    this.root = removeNum(this.root, data);

    function removeNum(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNum(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNum(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
       node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNum(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}

module.exports = {
  BinarySearchTree
};