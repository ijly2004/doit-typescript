export const map = <T, Q>(array:T[], callback: (value:T, index?:number) => Q):Q[] => {
  let result:Q[] = [];
  for(let index=0; index < array.length; ++index) {
    const value = array[index];
    result = [...result, callback(value, index)];
  }
  return result;
}

let array1:number[] = [1,2,3,4,5]
const result = map(array1, (num1, idx) => {
  return num1 * 2;
});
console.log(`mapresult=>${result}`)