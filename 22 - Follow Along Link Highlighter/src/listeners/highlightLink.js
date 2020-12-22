'use strict';

import { highlightLink } from '../handlers/highlightLink.js';

const triggers = document.querySelectorAll('a');

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));