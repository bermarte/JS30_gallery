'use strict';

import { items } from './addItem.js';
export const itemsList = document.querySelector('.plates');

console.log(items);

export function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
};