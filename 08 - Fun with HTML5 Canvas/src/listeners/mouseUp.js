'use strict';

import { data } from '../data.js';

const canvas = document.querySelector('#draw');

canvas.addEventListener('mouseup', () => data.isDrawing = false);