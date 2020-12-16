'use strict';

import { data } from '../data.js';

/**
 * Sum up the instances of each of these
 * @param {function} input - a function
 * @returns {obj} output - an object
 */

export const transportation = data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});