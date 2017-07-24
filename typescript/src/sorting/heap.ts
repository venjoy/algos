export interface Heap extends Array<number> {
    heapSize:number;
}

export function left(i: number) {
    return 2*i;
}

export function right(i: number) {
    return 2*i + 1;
}   

export function parent(i: number) {
    return Math.floor(i/2);
}

export function maxHeapify(A: Heap, i: number) {
    let l = left(i);
    let r = right(i);
    let largest = i;
    if (l <= A.heapSize && A[l] > A[i]) {
        largest = l;
    }
    if (r <= A.heapSize && A[r] > A[i]) {
        largest = r;
    }
    if (largest != i) {
        let temp = A[largest];
        A[largest] = A[i];
        A[i] = temp;
        maxHeapify(A, largest);
    }
}