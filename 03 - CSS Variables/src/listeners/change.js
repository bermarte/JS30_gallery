
'use strict';
'use strict';

import { inputs, handleUpdate } from '../handlers/handleUpdate.js';

inputs.forEach(input => input.addEventListener('change', handleUpdate));