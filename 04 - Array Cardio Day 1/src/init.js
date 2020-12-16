'use strict';

//import data
//import { inventors, people, data } from './data.js';

// import all the logic functions
import { fifteen } from './logic/filter.js';
import { fullNames } from './logic/map.js';
import { totalYears } from './logic/reduce.js';
import { alpha } from './logic/sort.js';
import { oldest } from './logic/sortYear.js';
import { transportation } from './logic/reduceTransportation.js';


// does your project have code that executes when the document or window are ready?
// that code can go here


console.table(fifteen);
console.log(fullNames);
console.log(totalYears);
console.table(oldest);
console.log(alpha);
console.log(transportation);
