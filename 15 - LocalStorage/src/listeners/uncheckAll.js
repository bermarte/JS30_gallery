'use strict';

import { checkAll } from '../handlers/uncheckAll.js';

const  listener = document.getElementById('uncheckAll');

listener.addEventListener('click', checkAll);
