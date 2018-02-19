class Sorter {
  constructor() {
    this.arr = [];
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let res = [];
    indices.forEach( i => res.push(this.arr[i]));
    res.sort( (a,b) => a-b);
    this.arr = [...res];
    return this.arr;
  }
 
  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;