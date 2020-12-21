'use strict';

import { itemsList, toggleDone } from '../handlers/toggleDone.js';

itemsList.addEventListener('click', toggleDone);