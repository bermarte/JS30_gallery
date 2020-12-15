'use strict';

import { inputs, handleUpdate } from '../handlers/handleUpdate.js';

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));