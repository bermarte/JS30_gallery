'use strict';

import { inventors } from '../data.js';

/**
 * Filter the list of inventors for those who were born in the 1500's
 * @param {array} input - an array containing inventors with year of birth and year of death
 * @returns {boolean} output - true if inventor was born in the 1500's
 */
export const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));