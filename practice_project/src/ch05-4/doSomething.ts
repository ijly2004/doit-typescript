import { ResultType } from './resultType';

/*
* tuple 예제
*/
export const doSomething = (): ResultType => {
  try {
    throw new Error('error occured');
  } catch(e) {
    return [false, e.message];
  }
}

const [result, message] = doSomething();
console.log(result, message);







