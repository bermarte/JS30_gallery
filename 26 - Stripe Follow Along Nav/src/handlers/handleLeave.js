'use strict';

//const background = document.querySelector('.dropdownBackground');
import { background } from './handleEnter.js';

export function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}