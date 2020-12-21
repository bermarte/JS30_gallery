'use strict';

import { addItem } from '../handlers/addItem.js';

const addItems = document.querySelector('.add-items');

addItems.addEventListener('submit', addItem);