'use strict';

const canvas = document.querySelector('#draw');

import { draw } from '../handlers/draw.js';

canvas.addEventListener('mousemove', draw);