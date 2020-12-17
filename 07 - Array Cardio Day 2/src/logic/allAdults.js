'use strict';

import { people } from '../data.js';

export const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({allAdults});