'use strict';

import { deleteAll } from '../handlers/deleteAll.js';

const  listener = document.getElementById('deleteAll');

listener.addEventListener('click', deleteAll);