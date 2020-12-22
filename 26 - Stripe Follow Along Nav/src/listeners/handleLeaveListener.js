'use strict';

import { handleLeave } from '../handlers/handleLeave.js';

const triggers = document.querySelectorAll('.cool > li');


triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))