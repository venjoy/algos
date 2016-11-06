import { insertion } from '../../src/sorting/insertion';
import { merge, sort as mergeSort } from '../../src/sorting/merge';

describe('Insertion', () => {
    
    it('insertion sort', () => {     
        expect(insertion([2,3,1,4])).toEqual([1,2,3,4]);
    });
    
});