'use strict';

import { items } from './addItem.js';
const itemsList = document.querySelector('.plates');

export function deleteAll(e) {
    e.preventDefault(); //prevent reload
    console.log('delete all');
    itemsList.innerHTML = '';
    localStorage.clear();
    items.length = 0;//items should be empty
}