export function merge(a: Array<number>, p: number, q: number, r: number) {
    let left = a.slice(p, q+1),
        right = a.slice(q+1),
        leftPtr = 0,
        rightPtr = 0;

    for (let i = p; i <= r; i++) {
        if (left[leftPtr] < right[rightPtr]) {
            a[i] = left[leftPtr];
            leftPtr++;
        } else {
            a[i] = right[rightPtr];
            rightPtr++;            
        }
    }

    return a;
}

export function sort(items: Array<number>, p:number = 0, r:number = items.length - 1) {
    if (p < r) {
        let q = Math.floor((p+r)/2);
        sort(items, p, q);
        sort(items, q+1, r);
        merge(items, p, q, r);
    }
    return items;
}
