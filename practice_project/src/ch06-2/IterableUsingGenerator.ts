export class IterableUsingGenerator<T> implements Iterable<T> {
  constructor(private values: T[] = [], private currentIndex: number = 0) {}

  [Symbol.iterator] = function* () {
    while(this.currentIndex < this.values.length) {
      yield this.values[this.currentIndex++];
    }
  }
}

for (let item of new IterableUsingGenerator([1,2,3])) {
    console.group(item)
}

for (let item of new IterableUsingGenerator(['a','b','c'])) {
  console.group(item)
}