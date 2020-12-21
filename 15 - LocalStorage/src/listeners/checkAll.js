'use strict';

import { checkAll } from '../handlers/checkAll.js';

const  listener = document.getElementById('checkAll');

listener.addEventListener('click', checkAll);
