'use strict';

import { takePhoto } from '../handlers/takePhoto.js';

const photo = document.querySelector('.takephoto');

photo.addEventListener('click', takePhoto);