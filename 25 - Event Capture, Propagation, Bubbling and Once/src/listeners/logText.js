'use strict';

import {
    logText
} from '../handlers/logText.js';

const divs = document.querySelectorAll('div');

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}));