'use strict';

import { paintToCanvas } from '../handlers/paintToCanvas.js';

const video = document.querySelector('.player');

video.addEventListener('canplay', paintToCanvas);