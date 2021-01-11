import { range } from './range';
import { fold } from './fold';
import {map} from './map';

let numbers: number[] = range(1, 100 + 1);
let result = fold(
  map(numbers, (value, idx) => value * value), 
  (result, value) => result + value, 0) //fold는 reduce와 같다
// console.log(numbers);
console.log('result', result);