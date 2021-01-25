export function* rangeGenerator(from:number, to:number) {
  let value = from;

  while(value < to) {
    yield value++;
  }
}

const generator = rangeGenerator(1, 10+1);

// for(let val of generator) {
//   console.log(val)
// }

while(true) {
  const {value, done} = generator.next();
  if(done === true) break;
  console.log(value);
}