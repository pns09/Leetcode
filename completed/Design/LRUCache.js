// Using Double Linked List and Map O(1)
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(key, val) {
    const newNode = new Node(key, val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  remove(node) {
    if (!node.next && !node.prev) {
      // if there's only 1 node
      this.head === null;
      this.tail === null;
    } else if (!node.next) {
      // if the node is tail node
      this.tail = node.prev;
      this.tail.next = null;
    } else if (!node.prev) {
      // if the node is head node
      this.head = node.next;
      this.head.prev = null;
    } else {
      // if the node is in between
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    }
    this.length--;
  }
}

class LRUCache {
  constructor(capacity) {
    this.DLL = new DoublyLinkedList();
    this.map = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const value = this.map.get(key).val;
    this.DLL.remove(this.map.get(key));
    this.map.set(key, this.DLL.push(key, value));
    return value;
  }

  put(key, value) {
    if (this.map.has(key)) this.DLL.remove(this.map.get(key));
    this.map.set(key, this.DLL.push(key, value));
    if (this.DLL.length > this.capacity) {
      const currKey = this.DLL.head.key;
      this.map.delete(currKey);
      this.DLL.remove(this.DLL.head);
    }
  }
}

// Using Map only -
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);
    return this.map.get(key);
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  this.map.set(key, value);

  if (this.map.size > this.capacity) {
    console.log(this.map.keys().next().value);
    this.map.delete(this.map.keys().next().value);
  }
};
