'use strict';

import { populateList } from '../logic/populateList.js';

import { items } from './addItem.js';
const itemsList = document.querySelector('.plates');

export function checkAll(e){
    e.preventDefault();//prevent reload

    /* example
    // items[2].done = 'true';
    // localStorage.setItem('items', JSON.stringify(items));
    */
    
   console.log('before ', items)

    let keys = Object.keys(items);

    console.log('check all', keys);
    
    keys.map(key => items[key].done = true);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);

    
} 