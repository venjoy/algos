"use strict";
function insertion(items) {
    for (var i = 1; i < items.length; i++) {
        var current = items[i];
        var pointer = i;
        while (pointer >= 0 && current < items[pointer - 1]) {
            items[pointer] = items[pointer - 1];
            pointer--;
        }
        items[pointer] = current;
    }
    return items;
}
exports.insertion = insertion;
