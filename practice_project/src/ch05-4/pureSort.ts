
let array = [3,4,1,0]

export const pureSort = <T>(array:readonly T[]): T[] => {
  let result:T[] = [];
  let deepCopied = [...array];
  result = deepCopied.sort()
  return result;
}

const sorted = pureSort(array)
console.log(array, sorted)