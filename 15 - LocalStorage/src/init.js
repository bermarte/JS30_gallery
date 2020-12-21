'use strict';

// import all listener files so they can attach to the DOM
import './listeners/addItem.js';
import './listeners/toggleDone.js';
import './listeners/checkAll.js';
import './listeners/uncheckAll.js';
import './listeners/deleteAll.js';

const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

// does your project have code that executes when the document or window are ready?
// that code can go here
import { populateList } from './logic/populateList.js';
populateList(items, itemsList);