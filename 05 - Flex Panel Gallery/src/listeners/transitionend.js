'use strict';

import { panels } from '../data.js';
import { toggleActive } from '../handlers/toggleActive.js';


panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));