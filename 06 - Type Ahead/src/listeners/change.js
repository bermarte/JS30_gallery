'use strict';


import { displayMatches } from '../handlers/displayMatches.js';
import { searchInput } from '../handlers/displayMatches.js';

searchInput.addEventListener('change', displayMatches);