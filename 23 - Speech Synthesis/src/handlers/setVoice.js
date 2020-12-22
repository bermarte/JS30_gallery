'use strict';


import { msg, voices } from './populateVoices.js';
// const msg = new SpeechSynthesisUtterance();
// let voices = [];
msg.text = document.querySelector('[name="text"]').value;

export function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}