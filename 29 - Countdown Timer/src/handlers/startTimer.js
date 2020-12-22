'use strict';

import { timer } from '../logic/timer.js';

export function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}