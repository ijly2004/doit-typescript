import { readFileSync, readFile } from 'fs';

console.log('readFileSync package.json');
const buffer: Buffer = readFileSync('package.json');
console.log(buffer.toString());


readFile('package.json', (error:Error, buffer:Buffer) => {
  console.log('readFile package.json');
  console.log(buffer.toString());
});

const readFilePromise = (filename:string): Promise(string) => {
  new Promise<string>((resolve, reject) => {
    readFile(filename, (error:Error, buffer:Buffer) => {
      if(error) {
        reject(error);
      } {
        resolve(buffer.toString());
      }
    });
  });
});