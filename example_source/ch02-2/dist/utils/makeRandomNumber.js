"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRandomNumber = void 0;
var MAX_AGE = 100;
function makeRandomNumber(max) {
    if (max === void 0) { max = MAX_AGE; }
    return Math.ceil((Math.random() * max));
}
exports.makeRandomNumber = makeRandomNumber;
console.log(makeRandomNumber(100));
console.log('makeRandomNumber!!');
//# sourceMappingURL=makeRandomNumber.js.map