import { nextTick } from "process";

export function* gen() {
  let count = 5;
  let select = 0;
  while(count--) {
    select = yield `you select ${select}`; //next function의 인자가 yield의 반환값이 됨 
  }
}

export const random = (max:number, min = 0):number => Math.round(Math.random() * max - min) + min;


const iter = gen();
let i = 0;
while(true) {
  const {value, done} = iter.next(i++);
  if(done) break;
  console.log(value);
}