'use strict';

export const msg = new SpeechSynthesisUtterance();
export let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
msg.text = document.querySelector('[name="text"]').value;

export function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}