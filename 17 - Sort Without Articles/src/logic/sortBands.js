'use strict';

import { bands } from '../data.js';
import { strip } from '../logic/strip.js';

export const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);