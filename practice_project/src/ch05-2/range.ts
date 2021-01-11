export const range = (from: number, to: number):number[] =>
  from < to ? [from, ...range(from + 1, to)] : []

const rangeTest = (from: number, to: number):number[] => {
  if(from < to) {
    const recursive = rangeTest(from + 1, to)
    return [from, ...recursive]
  } else {
    return []
  }
}
  

const numbers:number[] = rangeTest(1, 5 + 1)
// console.log(numbers)