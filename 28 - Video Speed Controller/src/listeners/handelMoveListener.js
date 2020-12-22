'use strict';

import { handleMove } from '../handlers/handleMove.js';
const speed = document.querySelector('.speed');

speed.addEventListener('mousemove', handleMove);