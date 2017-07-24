"use strict";
var merge_1 = require('../../src/sorting/merge');
describe('Merge', function () {
    it('merging', function () {
        expect(merge_1.merge([2, 3, 1, 4], 0, 1, 3)).toEqual([1, 2, 3, 4]);
    });
    it('sorting', function () {
        expect(merge_1.sort([2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
    });
});
