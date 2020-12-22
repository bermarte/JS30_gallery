'use strict';

import { startTimer } from '../handlers/startTimer.js';

const buttons = document.querySelectorAll('[data-time]');

buttons.forEach(button => button.addEventListener('click', startTimer));