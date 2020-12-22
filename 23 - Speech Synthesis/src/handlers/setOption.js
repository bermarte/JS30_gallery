'use strict';

import { msg } from './populateVoices.js';
import { toggle } from './toggle.js';

// const msg = new SpeechSynthesisUtterance();
msg.text = document.querySelector('[name="text"]').value;

export function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}