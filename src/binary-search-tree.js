const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.rootData = null;
  }

  root() {
    return this.rootData;
  }

  add(data) {
    this.rootData = addNum(this.rootData, data);

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
    return searchNum(this.rootData, data);

    function searchNum(node, data) {
      if(!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      
      if (data > node.data) {
        return searchNum(node.right, data);
      } else {
        return searchNum(node.left, data);
      }
  }
  }

  find(data) {
    return findNum(this.rootData, data);

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
    this.rootData = removeNum(this.rootData, data);

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
    if (!this.rootData) {
      return null;
    }

    let minNode = this.rootData;
    while (minNode.left) {
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max() {
    if (!this.rootData) {
      return null;
    }

    let maxNode = this.rootData;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }

}

module.exports = {
  BinarySearchTree
};