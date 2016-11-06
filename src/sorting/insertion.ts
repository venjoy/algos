export function insertion(items: Array<Number>) {

    for (let i = 1; i < items.length; i++) {        
        // saving for later use
        let current = items[i];

        // init pointer        
        let pointer = i;
        
        // moving pointer leftward
        while (pointer >= 0 && current < items[pointer-1]) {
            // shifting larger item up
            items[pointer] = items[pointer-1];
            
            // moving to lower item
            pointer--;
        }
        
        // placing at final position
        items[pointer] = current;
    }

    return items;
}