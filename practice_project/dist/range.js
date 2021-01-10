var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var range = function (from, to) {
    return from < to ? __spread([from], range(from + 1, to)) : [];
};
var range2 = function (from, to) {
    if (from < to) {
        var recursive = range2(from + 1, to);
        return __spread([from], recursive);
    }
    else {
        return [];
    }
};
var numbers = range2(1, 5 + 1);
console.log(numbers);
//# sourceMappingURL=range.js.map