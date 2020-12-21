'use strict';

import { shadow } from '../handlers/shadow.js';

const hero = document.querySelector('.hero');

hero.addEventListener('mousemove', shadow);