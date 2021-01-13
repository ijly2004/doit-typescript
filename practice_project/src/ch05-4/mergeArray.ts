import { triggerAsyncId } from "async_hooks";

export const mergeArray = <T>(...arrays:T[][]):T[] => {
  console.log("arrays", arrays);
  const result:T[] = arrays.reduce((prev:T[], val:T[]) => {
    return [...prev, ...val];
  }, []);
  return result;
  
}


const mergeArray1:string[] = mergeArray(['Hello', 'CJ']);
console.log("1", mergeArray1);

const mergeArray2:number[] = mergeArray([1], [2,3], [4,5,6,7]);
console.log("2", mergeArray2);

