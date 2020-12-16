'use strict';

import { people } from '../data.js';


/**
 * sort the inventor y first and last name
 * @param {function} input - a function
 * @returns {string} 1 or -1 Sort the people alphabetically by last name
 */
export const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});