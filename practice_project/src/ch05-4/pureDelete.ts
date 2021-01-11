export const pureDelete = <T>(array: readonly T[],
   cb: (val:T, index?:number) => boolean):T[] => {
  return array.filter((val, index) => cb(val, index) == false);
}

