'use strict';

import { handleCheck, checkboxes } from '../handlers/handleCheck.js';



checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));