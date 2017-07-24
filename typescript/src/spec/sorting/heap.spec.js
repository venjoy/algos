"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var heap_1 = require('../../src/sorting/heap');
var InputA = (function (_super) {
    __extends(InputA, _super);
    function InputA(heapSize) {
        _super.call(this);
        if (!heapSize)
            this.heapSize = this.length;
    }
    return InputA;
}(Array));
describe('Heap', function () {
    it('insertion sort', function () {
        var A = new InputA();
        A.heapSize = A.push(16, 4, 10, 14, 7, 3, 9, 2, 8, 1);
        heap_1.maxHeapify(A, 1);
        var match = new InputA();
        match.heapSize = match.push(16, 14, 10, 9, 7, 3, 4, 2, 8, 1);
        expect(A).toEqual(match);
    });
});
