'use strict';

import { setDate } from './handlers/setDate.js';

// import all listener files so they can attach to the DOM

// does your project have code that executes when the document or window are ready?
// that code can go here

export const secondHand = document.querySelector('.second-hand');
export const minsHand = document.querySelector('.min-hand');
export const hourHand = document.querySelector('.hour-hand');

setInterval(setDate, 1000);
setDate();
