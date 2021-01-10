import { range } from './range';
import { fold } from './fold';

let numbers: number[] = range(1, 10 + 1);
let result = fold(numbers, (result, value) => result + value, 0)
// console.log(numbers);
console.log('result', result);