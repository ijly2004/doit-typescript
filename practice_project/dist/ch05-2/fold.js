"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fold = void 0;
exports.fold = function (array, callback, initValue) {
    var result = initValue;
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        result = callback(result, value);
    }
    return result;
};
//# sourceMappingURL=fold.js.map