import { pureDelete } from './pureDelete';

const mixedArray: object[] = [
  [], {name: 'jack'}, {name:"Jane", age:32}, ['description']
];
const objectOnly:object[] = pureDelete(mixedArray, (val, idx) => {
  return Array.isArray(val);
});

console.log('objectOnly', JSON.stringify(objectOnly));

// console.log('pureDelete', pureDelete)