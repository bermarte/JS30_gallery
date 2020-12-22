'use strict';

import { handleEnter } from '../handlers/handleEnter.js';

const triggers = document.querySelectorAll('.cool > li');

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));