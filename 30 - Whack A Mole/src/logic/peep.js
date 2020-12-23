'use strict';

import { randomTime } from './randomTime.js';
import { randomHole } from './randomHoles.js';
import { timeUp } from '../handlers/startGame.js';

const holes = document.querySelectorAll('.hole');
//let timeUp = false;


export function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}