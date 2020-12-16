'use strict';

import { inventors } from '../data.js';

/**
 * reverses a string 
 * @param {array} - an array of strings
 * @returns {array} -an array of strings
 * //Give us an array of the inventor first and last names
 */
export const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);