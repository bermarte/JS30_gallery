'use strict';

import { data } from '../data.js';

const canvas = document.querySelector('#draw');

canvas.addEventListener('mousedown', (e) => {
    data.isDrawing = true;
    [data.lastX, data.lastY] = [e.offsetX, e.offsetY];
  });
