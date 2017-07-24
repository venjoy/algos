import { insertion } from '../../src/sorting/insertion';
import { merge, sort as mergeSort } from '../../src/sorting/merge';

describe('Merge', () => {

    it('merging', () => {     
        expect(merge([2,3,1,4], 0, 1, 3)).toEqual([1,2,3,4]);
    });

    it('sorting', () => {
        expect(mergeSort([2,3,1,4])).toEqual([1,2,3,4]);
    });

});