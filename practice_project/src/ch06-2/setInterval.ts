const period = 1000
let count = 0

console.log('start');
const id = setInterval(() => {
  if(count >= 3) {
    clearInterval(id);
    console.log('finished');
  } else {
    console.log(++count);
  }

}, period);