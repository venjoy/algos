import { maxHeapify, Heap } from '../../src/sorting/heap';

class InputA extends Array<number> {
    heapSize: number;

    constructor(heapSize?:number) {
        super();
        if (!heapSize) this.heapSize = this.length;
    }
}

describe('Heap', () => {
    
    it('insertion sort', () => {  
        let A = new InputA();
        A.heapSize = A.push(16,4,10,14,7,3,9,2,8,1);
        maxHeapify(A, 1);

        let match = new InputA();
        match.heapSize = match.push(16,14,10,9,7,3,4,2,8,1);
        expect(A).toEqual(match);
    });
    
});