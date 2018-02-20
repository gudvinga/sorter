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
    let sortArr = [],
        count = 0;

    indices.forEach( ind => {
      sortArr.push(this.arr[ind]);
      delete this.arr[ind]
    })

    sortArr.sort(this.compareFunction);

    for(let i=0; i < this.arr.length; i++) {
      if(!this.arr[i]) {
        this.arr[i] = sortArr[count];
        count++;
      }
    }
  }
 
  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;