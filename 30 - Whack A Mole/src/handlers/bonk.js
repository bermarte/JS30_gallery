'use strict';

import { data } from './startGame.js';
const scoreBoard = document.querySelector('.score');

export function bonk(e) {
    if (!e.isTrusted) return; // cheater!
    data.score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = data.score;
}