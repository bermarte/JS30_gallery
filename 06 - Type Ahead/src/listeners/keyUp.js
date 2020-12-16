'use strict';


import { searchInput } from '../handlers/displayMatches.js';
import { displayMatches } from '../handlers/displayMatches.js';

searchInput.addEventListener('keyup', displayMatches);