'use strict';

import { populateVoices } from '../handlers/populateVoices.js';

speechSynthesis.addEventListener('voiceschanged', populateVoices);