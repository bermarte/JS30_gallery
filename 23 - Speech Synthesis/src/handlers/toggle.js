'use strict';

import { msg } from './populateVoices.js';
// const msg = new SpeechSynthesisUtterance();
msg.text = document.querySelector('[name="text"]').value;

export function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}