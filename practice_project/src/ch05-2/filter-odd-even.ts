import {range} from './range';

const array:number[] = range(1, 10 + 1);

let odds = array.filter((value) => value % 2 != 0);
let even = array.filter((value) => value % 2 == 0);

console.log("1", odds);
console.log("2", even);