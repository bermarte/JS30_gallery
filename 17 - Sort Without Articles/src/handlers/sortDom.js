'use strict';

import { sortedBands } from '../logic/sortBands.js';

document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

console.log(sortedBands);