'use strict';

import { inventors } from '../data.js';

/**
 * How many years did all the inventors live?
 * @param {function} - a function
 * @returns {string} -total of years
 *
 */
export const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);