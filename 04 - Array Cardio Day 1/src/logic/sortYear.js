'use strict';

import { inventors } from '../data.js';

/**
 * Sort the inventors by years lived
 * @param {function} - a function
 * @returns {string} -1 or -1
 *
 */
export const oldest = inventors.sort(function (a, b) {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return lastInventor > nextInventor ? -1 : 1;
});