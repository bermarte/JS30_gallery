'use strict';

import { panels } from '../data.js';
import { toggleOpen } from '../handlers/toggleOpen.js';


panels.forEach(panel => panel.addEventListener('click', toggleOpen));