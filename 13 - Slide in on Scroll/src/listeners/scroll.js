'use strict';

import { debounce } from '../logic/debounce.js';
import { checkSlide } from '../handlers/checkSlide.js';

window.addEventListener('scroll', debounce(checkSlide));