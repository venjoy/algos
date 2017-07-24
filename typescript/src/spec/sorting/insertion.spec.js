"use strict";
var insertion_1 = require('../../src/sorting/insertion');
describe('Insertion', function () {
    it('insertion sort', function () {
        expect(insertion_1.insertion([2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
    });
});
