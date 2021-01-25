/**
 * 확인사항
 * closure에 next()를 반환하면 기존에 사용하는 변수인 to는 저장되고
 * from은 날아감
 * currentValue ++은 첫번재가 1인 경우
 * value에 1을 넣고 currentValue는 2가 됨
 * Value++의 의미 : 선반환 후반영
 * @param from 
 * @param to 
 */
export const createRangeIterable = (from:number, to:number) => {
  let currentValue = from;
  return {
    next() {
      const value = currentValue < to ? currentValue ++ : undefined;
      const done = value == undefined;
      return {value, done}
    }
  }
}

// const iterator = createRangeIterable(1, 3 + 1)
// while(true) {
//   const {value, done} = iterator.next();
//   if(done) break;
//   console.log(value)
// }