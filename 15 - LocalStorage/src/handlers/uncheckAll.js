'use strict';

import { populateList } from '../logic/populateList.js';

import { items } from './addItem.js';
const itemsList = document.querySelector('.plates');


export function checkAll(e) {
    e.preventDefault(); //prevent reload
    let keys = Object.keys(items);
    keys.map(key => items[key].done = false);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);

}