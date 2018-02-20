class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = (a,b) => a - b;
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
    indices.sort( (a,b) => a - b);
    let arrStart = this.arr.slice(0,indices[0]),
        arrEnd = this.arr.slice(indices[indices.length - 1] + 1),
        arrSort = []; 

    indices.forEach(i => arrSort.push(this.arr[i]));
    arrSort.sort(this.compareFunction);

    this.arr = arrStart.concat(arrSort, arrEnd);
  }
 
  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;