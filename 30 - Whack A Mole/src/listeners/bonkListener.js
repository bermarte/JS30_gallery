'use strict';


import { bonk } from '../handlers/bonk.js'
const moles = document.querySelectorAll('.mole');

moles.forEach(mole => mole.addEventListener('click', bonk));