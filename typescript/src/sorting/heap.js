"use strict";
function left(i) {
    return 2 * i;
}
exports.left = left;
function right(i) {
    return 2 * i + 1;
}
exports.right = right;
function parent(i) {
    return Math.floor(i / 2);
}
exports.parent = parent;
function maxHeapify(A, i) {
    var l = left(i);
    var r = right(i);
    var largest = i;
    if (l <= A.heapSize && A[l] > A[i]) {
        largest = l;
    }
    if (r <= A.heapSize && A[r] > A[i]) {
        largest = r;
    }
    if (largest != i) {
        var temp = A[largest];
        A[largest] = A[i];
        A[i] = temp;
        maxHeapify(A, largest);
    }
}
exports.maxHeapify = maxHeapify;
