'use strict';

import { peep } from '../logic/peep.js'

const scoreBoard = document.querySelector('.score');
export let timeUp = false;
//export let score = 0;
export const data = {score : 0 };

export function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    data.score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
}