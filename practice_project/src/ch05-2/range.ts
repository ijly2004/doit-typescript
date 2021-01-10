export const range = (from: number, to: number):number[] =>
  from < to ? [from, ...range(from + 1, to)] : []

const range2 = (from: number, to: number):number[] => {
  if(from < to) {
    const recursive = range2(from + 1, to)
    return [from, ...recursive]
  } else {
    return []
  }
}
  

  const numbers:number[] = range2(1, 5 + 1)
  // console.log(numbers)