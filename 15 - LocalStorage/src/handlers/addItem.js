'use strict';

import { populateList } from '../logic/populateList.js';

export const itemsList = document.querySelector('.plates');
export var items = JSON.parse(localStorage.getItem('items')) || [];

export function addItem(e) {
    e.preventDefault();

    console.log('erase yes? ', JSON.parse(localStorage.getItem('items')))
    //items = JSON.parse(localStorage.getItem('items')) || [];
    console.log('before saving', items);
    console.log('erase yes or not? ', JSON.parse(localStorage.getItem('items')))

    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
    console.log('saved new', items);
    console.log('after saving ', JSON.parse(localStorage.getItem('items')))
};