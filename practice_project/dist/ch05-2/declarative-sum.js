"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = require("./range");
var fold_1 = require("./fold");
var numbers = range_1.range(1, 10 + 1);
var result = fold_1.fold(numbers, function (result, value) { return result + value; }, 0);
// console.log(numbers);
console.log('result', result);
//# sourceMappingURL=declarative-sum.js.map