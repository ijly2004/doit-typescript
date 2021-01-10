const identity = <T>(n: T): T => n
const normal = (cb:(a0:number) => number): void => {}
// const error = (cb:(a0:number, a1:number?) => number):void => {}
const fixed = (cb: (a0:number, a1?:number) => number): void => {}

console.log(
  identity<boolean>(true),
  identity(true)
)