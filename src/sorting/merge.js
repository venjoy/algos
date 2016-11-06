"use strict";
function merge(a, p, q, r) {
    var left = a.slice(p, q + 1), right = a.slice(q + 1), leftPtr = 0, rightPtr = 0;
    for (var i = p; i <= r; i++) {
        if (left[leftPtr] < right[rightPtr]) {
            a[i] = left[leftPtr];
            leftPtr++;
        }
        else {
            a[i] = right[rightPtr];
            rightPtr++;
        }
    }
    return a;
}
exports.merge = merge;
function sort(items, p, r) {
    if (p === void 0) { p = 0; }
    if (r === void 0) { r = items.length - 1; }
    if (p < r) {
        var q = Math.floor((p + r) / 2);
        sort(items, p, q);
        sort(items, q + 1, r);
        merge(items, p, q, r);
    }
    return items;
}
exports.sort = sort;
