'use strict';

import { startGame } from '../handlers/startGame.js';

const start = document.querySelector('.startgame');

start.addEventListener('click', startGame);